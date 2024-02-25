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

import {useState, useEffect, useContext} from 'react';
import UserContext from '../UserContext.tsx';
import {Navigate} from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"


export default function Login() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(true);

	const {setUser} = useContext(UserContext);
  const { toast } = useToast()

	useEffect(() => {
		if(email !== "" && password !== "" ) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}
	}, [email, password]);

	function loginUser(event) {
		event.preventDefault();

		fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/login`, {
			method: 'POST',
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password,
			})
		})
		.then(result => result.json())
		.then(data => {

			if(data.accessToken) {
				localStorage.setItem('token', data.accessToken);
				retrieveUserDetails(data.accessToken);
        toast({
          title: "Login Successful!",
          description: "You have successfully logged in.",
        })
				setEmail('');
				setPassword('');
			} else {
				setEmail('');
				setPassword('');
			}
		})
	}

	const retrieveUserDetails = (token) => {
		fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/details`, {
			method: "POST",
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(result => result.json())
		.then(data => {
			setUser({
				id: data._id,
				role: data.role
			})
		})
	}
  return (
    <Card className="w-[350px] mt-12 mx-auto">
      <CardHeader className="grid justify-items-start">
        <CardTitle>Login your account</CardTitle>
        <CardDescription>To proceed, enter your registered account.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2 justify-items-start">
          <Label htmlFor="email">Email</Label>
          <Input 
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </div>
        <div className="grid gap-2 justify-items-start">
          <Label htmlFor="password">Password</Label>
          <Input 
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={event => loginUser(event)} disabled={isActive}>Login</Button>
      </CardFooter>
    </Card>

  )
}