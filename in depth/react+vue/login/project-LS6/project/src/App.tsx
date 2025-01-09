import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, LogIn, UserPlus, CreditCard, Wallet } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-br from-purple-900/50 to-red-900/50 ring-2 ring-purple-700/50 shadow-lg shadow-purple-500/20">
            <DollarSign className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-900/50 backdrop-blur border border-zinc-800">
            <TabsTrigger value="login" className="data-[state=active]:bg-purple-900/80">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-purple-900/80">
              <UserPlus className="w-4 h-4 mr-2" />
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">Welcome back</CardTitle>
                <CardDescription className="text-zinc-400">Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <Button variant="outline" className="w-full bg-zinc-800/50 border-zinc-700 hover:bg-purple-900/20 hover:text-purple-400 transition-all">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Sign in with PayPal
                    </Button>
                    <Button variant="outline" className="w-full bg-zinc-800/50 border-zinc-700 hover:bg-red-900/20 hover:text-red-400 transition-all">
                      <Wallet className="w-5 h-5 mr-2" />
                      Sign in with Cash App
                    </Button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-zinc-700" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-zinc-900 px-2 text-zinc-400">Or continue with</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-800/50 border-zinc-700 focus:ring-purple-500/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" className="bg-zinc-800/50 border-zinc-700 focus:ring-purple-500/50" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-red-700 hover:from-purple-600 hover:to-red-600 transition-all shadow-lg shadow-purple-900/20" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">Create an account</CardTitle>
                <CardDescription className="text-zinc-400">Enter your details to get started</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <Button variant="outline" className="w-full bg-zinc-800/50 border-zinc-700 hover:bg-purple-900/20 hover:text-purple-400 transition-all">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Sign up with PayPal
                    </Button>
                    <Button variant="outline" className="w-full bg-zinc-800/50 border-zinc-700 hover:bg-red-900/20 hover:text-red-400 transition-all">
                      <Wallet className="w-5 h-5 mr-2" />
                      Sign up with Cash App
                    </Button>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-zinc-700" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-zinc-900 px-2 text-zinc-400">Or continue with</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" type="email" placeholder="john@example.com" className="bg-zinc-800/50 border-zinc-700 focus:ring-purple-500/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input id="register-password" type="password" className="bg-zinc-800/50 border-zinc-700 focus:ring-purple-500/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" className="bg-zinc-800/50 border-zinc-700 focus:ring-purple-500/50" required />
                  </div>
                  <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-purple-900/20 to-red-900/20 rounded-lg border border-purple-700/30">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-200">Secure payment integration enabled</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-gradient-to-r from-red-700 to-purple-700 hover:from-red-600 hover:to-purple-600 transition-all shadow-lg shadow-red-900/20" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
