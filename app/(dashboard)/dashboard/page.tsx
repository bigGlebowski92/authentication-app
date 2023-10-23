'use client';

import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [newName, setNewName] = useState('');

  if (session) {
    return (
      <section className="flex flex-col space-y-6 text-center">
        <h2 className="text-3xl">
          welcome
          <span className="w-3 text-red-300"> {session?.user?.name}</span>
        </h2>
        <div className="flex gap-5">
          <Input
            type="text"
            placeholder="Set new session name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full"
            onClick={() => update({ name: newName })}
          >
            Update Name
          </Button>
        </div>

        <Button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/`,
            })
          }
          variant="destructive"
        >
          Sign out
        </Button>
      </section>
    );
  } else {
    return (
      <>
        <div>You need to Sign In first</div>
        <Button onClick={() => router.push('/')}>Go to Sign In page</Button>
      </>
    );
  }
};

export default DashboardPage;
