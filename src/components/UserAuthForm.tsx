"use client"

import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from "next-auth/react"
import { Icons } from './Icons'
import { useToast } from './ui/use-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}


const UserAuthForm: FC<UserAuthFormProps> = ({
    className,
    ...props
}) => {

    const {toast} = useToast()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try {
            // throw new Error()
            await signIn('google')

        } catch (error) {
            //toast notification to the user
            toast({
                title: "Something went wrong!",
                description: "There was an error logging in with Google",
                variant: "destructive"
            })

        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div 
            className={cn(
                "flex justify-center",
                className
            )}
            {...props}
        >
            <Button
                size={"sm"}
                className='w-full'
                onClick={loginWithGoogle}
                isLoading={isLoading}
            >
                {isLoading ? null : <Icons.google className='h-4 w-4 mr-2'/>}
                Google
            </Button>
        </div>
    )
}

export default UserAuthForm