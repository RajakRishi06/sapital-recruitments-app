#!/bin/bash

# Sapital Recruitments App - Quick Start Script
# Run this script in Git Bash to set up and start the app

echo "=========================================="
echo "Sapital Recruitments Mobile App Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "This may take a few minutes..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo ""
        echo "⚠️  Installation encountered issues. Trying with --legacy-peer-deps..."
        npm install --legacy-peer-deps
    fi
    
    echo ""
    echo "✅ Dependencies installed successfully!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "=========================================="
echo "Starting Development Server..."
echo "=========================================="
echo ""
echo "📱 Instructions:"
echo "1. Install 'Expo Go' app on your phone"
echo "2. Scan the QR code that will appear"
echo "3. App will load on your device"
echo ""
echo "To stop the server: Press Ctrl + C"
echo ""

# Start the Expo development server
npm start
