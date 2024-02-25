import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle'
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Navbar() {
  return (
    <>
    <div className="md:flex hidden justify-between">
      <div className="flex">
        <Button variant="ghost" className="text-muted-foreground">Home</Button>
        <Button variant="ghost" className="text-muted-foreground">Shop</Button>
      </div>
      <div className="flex">
        <Button variant="ghost" className="text-muted-foreground">Register</Button>
        <Button variant="ghost" className="text-muted-foreground">Login</Button>
        <div>
          <ModeToggle/>
        </div>
      </div>
    </div>

    <div className="md:hidden flex justify-between">
      <div className="flex">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="grid justify-items-start">
            <SheetTitle>Digibees</SheetTitle>
            <SheetDescription>Hive of Digital Cameras</SheetDescription>
          </SheetHeader>
          <Separator className="my-3"/>
          <div className="grid justify-items-start">
            <Button variant="link" className="text-muted-foreground">Home</Button>
            <Button variant="link" className="text-muted-foreground">Shop</Button>
          </div>
        </SheetContent>
      </Sheet>
      </div>
      <div className="flex">
        <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="bg-[#e11d48] h-8 w-8">
                  <AvatarImage src="/public/bumblebee.png" alt="@bee" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Login</DropdownMenuItem>
              <DropdownMenuItem>Register</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <div>
          <ModeToggle/>
        </div>
      </div>
    </div>
    </>
  )
}