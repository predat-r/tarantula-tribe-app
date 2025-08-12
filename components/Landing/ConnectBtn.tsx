import React, { useState } from "react";
import { Wallet } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ConnectBtn = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (isConnecting) return;
    
    setIsConnecting(true);
    
    // Temporarily suppress console errors from wallet extensions
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (
        message.includes('User rejected') ||
        message.includes('chrome-extension') ||
        message.includes('evmAsk.js')
      ) {
        return; // Suppress wallet extension errors
      }
      originalConsoleError.apply(console, args);
    };
    
    // Add a timeout to ensure button re-enables even if wallet popup hangs
    const timeoutId = setTimeout(() => {
      console.error = originalConsoleError;
      setIsConnecting(false);
    }, 30000); // 30 second timeout
    
    try {
      // Check if MetaMask is installed
      if (typeof window !== 'undefined' && window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log('Wallet connected:', accounts[0]);
        }
      } else {
        // No wallet detected
        alert('Please install MetaMask or another Web3 wallet to connect!');
      }
    } catch (error: any) {
      // Handle user rejection and cancellation silently
      if (
        error.code === 4001 || // User rejected the request
        error.code === -32002 || // Request already pending
        error.message?.toLowerCase().includes('user rejected') ||
        error.message?.toLowerCase().includes('user denied') ||
        error.message?.toLowerCase().includes('rejected') ||
        error.message?.toLowerCase().includes('cancelled') ||
        error.message?.toLowerCase().includes('canceled')
      ) {
        // User cancelled or rejected - do nothing, no logging
      } else {
        // Only log actual errors, not user cancellations
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please try again.');
      }
    } finally {
      // Clear the timeout and always restore console.error and reset connecting state
      clearTimeout(timeoutId);
      console.error = originalConsoleError;
      setIsConnecting(false);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <button
      onClick={connectWallet}
      disabled={isConnecting}
      className={`flex flex-row w-24 sm:w-44 text-gray-300 ${inter.className} opacity-100 backdrop-blur-none rounded-3xl bg-[#6D107B] p-2 items-center justify-around hover:bg-[#7D208B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      <h1 className="text-[10px] sm:text-sm">
        {isConnecting 
          ? "Connecting..." 
          : walletAddress 
            ? formatAddress(walletAddress)
            : "Connect Wallet"
        }
      </h1>
      <Wallet className="size-5" />
    </button>
  );
};

export default ConnectBtn;
