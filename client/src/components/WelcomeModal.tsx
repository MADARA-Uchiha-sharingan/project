import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QRCode from "@/assets/qrcode.svg";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-background max-w-md mx-auto p-6 rounded-lg">
        <div className="text-center">
          <h2 className="font-playfair text-2xl font-bold mb-2 text-burgundy">
            Welcome to Hotel Path Annapurna
          </h2>
          <p className="mb-6">
            Experience our premium dining with authentic Nepali and international cuisines
          </p>
          <div className="border-t border-b border-border py-4 my-4">
            <p className="text-sm text-muted-foreground mb-2">
              Scan QR code to access our digital menu on your device
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white flex items-center justify-center rounded border">
                <img src={QRCode} alt="QR Code" className="w-28 h-28" />
              </div>
            </div>
          </div>
          <Button 
            onClick={onClose} 
            className="mt-4 bg-burgundy hover:bg-burgundy/90 text-white px-8"
          >
            Thank You
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WelcomeModal;
