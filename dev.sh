#!/bin/bash

# Dash Influence Development Script
# This script manages the development environment for both frontend and backend

echo "🚀 Starting Dash Influence Development Environment..."

# Function to cleanup processes
cleanup() {
    echo "🧹 Cleaning up processes..."
    pkill -f "tsx server/index.ts" 2>/dev/null
    pkill -f "vite" 2>/dev/null
    sleep 2
}

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "⚠️  Port $port is already in use"
        return 1
    fi
    return 0
}

# Cleanup any existing processes
cleanup

# Check ports
if ! check_port 3000; then
    echo "❌ Port 3000 is busy. Please free it up first."
    exit 1
fi

if ! check_port 5173; then
    echo "❌ Port 5173 is busy. Please free it up first."
    exit 1
fi

echo "✅ Ports are available"

# Start backend server
echo "🔧 Starting backend server on port 3000..."
pnpm run dev:server &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Check if backend started successfully
if ! check_port 3000; then
    echo "✅ Backend server is running on port 3000"
else
    echo "❌ Backend server failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Start frontend server
echo "🎨 Starting frontend server on port 5173..."
pnpm dev &
FRONTEND_PID=$!

# Wait for frontend to start
sleep 3

# Check if frontend started successfully
if ! check_port 5173; then
    echo "✅ Frontend server is running on port 5173"
else
    echo "❌ Frontend server failed to start"
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🎉 Development environment is ready!"
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend:  http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Function to handle script termination
trap 'echo ""; echo "🛑 Stopping servers..."; cleanup; exit 0' INT TERM

# Keep script running
wait 