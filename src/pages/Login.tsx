import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <Card className="w-[350px]">
      <CardHeader className="grid justify-items-start">
        <CardTitle>Login your account</CardTitle>
        <CardDescription>To proceed, enter your registered account.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2 justify-items-start">
          <Label htmlFor="email">Email</Label>
          <Input type='email'/>
        </div>
        <div className="grid gap-2 justify-items-start">
          <Label htmlFor="password">Password</Label>
          <Input type='password'/>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Login</Button>
      </CardFooter>
    </Card>

  )
}