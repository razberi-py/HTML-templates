import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Lock, Mail, User, Github, Sparkles, KeyRound, ShieldCheck } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Your account has been created.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const Icon = [Lock, Sparkles, KeyRound, ShieldCheck][i % 4];
          return (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${0.5 + Math.random()})`,
                filter: 'blur(1px)'
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 backdrop-blur-[2px]" />
      </div>
      <Card className="w-full max-w-md mx-4 my-8 animate-fade-in-up backdrop-blur-md bg-background/80 border-background/20 shadow-2xl">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="m@example.com" 
                      className="pl-9 transition-all duration-300 focus:ring-2 focus:ring-primary/20 group-hover:border-primary/50" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type="password" 
                      className="pl-9 transition-all duration-300 focus:ring-2 focus:ring-primary/20 group-hover:border-primary/50" 
                      required 
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl" 
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <Button 
                  variant="outline" 
                  type="button" 
                  className="w-full hover:bg-background/50 transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your information to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" type="text" className="pl-9" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="register-email" type="email" placeholder="m@example.com" className="pl-9" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="register-password" type="password" className="pl-9" required />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with GitHub
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

export default App;