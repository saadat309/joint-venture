import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Modern React Starter
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Vite + React + Tailwind + Shadcn/UI + Framer Motion
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your email to get started:
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default App