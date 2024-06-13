'use client';

import { Button } from '@rechain/ui/button';
import { useToast } from '@rechain/ui/toast';

export const ShowToast = () => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Hello, World!',
          description: 'This is a toast message.',
        });
      }}
    >
      Show Toast
    </Button>
  );
};
