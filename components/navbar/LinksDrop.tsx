import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserIcon from './UserIcon';


import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOut from './SignOut';
import { auth } from '@clerk/nextjs/server';

function LinksDrop() {
  const {userId} = auth()
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-4 max-w-[100px]" variant="outline">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" sideOffset={10} align="start">
        
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/">
              home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/favorites">
              favorites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/bookings">
              bookings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/reviews">
              reviews
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/reservations">
              reservations
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/rentals/create">
              create rental
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/rentals">
              my rentals
            </Link>
          </DropdownMenuItem>
          {isAdmin && (
            <DropdownMenuItem>
              <Link className="capitalize w-full" href="/admin">
                my admin
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Link className="capitalize w-full" href="/profile">
              profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDrop;
