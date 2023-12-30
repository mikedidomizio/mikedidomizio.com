import {ReactNode} from "react";

export const Content = ({ children}: { children: ReactNode }) => {
    return <main className="flex flex-wrap px-4 md:px-6 lg:px-8 py-6 md:py-12 lg:py-16 space-y-6 md:space-y-12 lg:space-y-16 md:space-x-6 lg:space-x-16">
        <section className="w-full">
            {children}
        </section>
    </main>
}
