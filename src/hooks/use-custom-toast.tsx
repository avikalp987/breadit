import { buttonVariants } from "@/components/ui/Button"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

export const useCustomToast = () => {
    const loginToast = () => {
        const { dismiss } = toast({
            title: "Login required.",
            description: "You need to be logged in.",
            variant: "destructive",
            action: (
                <Link 
                    className={buttonVariants({variant: "outline"})} 
                    href={"/sign-in"}
                    onClick={() => dismiss()}
                >
                    Login
                </Link>
            )
        })
    }

    return { loginToast }
}