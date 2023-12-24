import {Navbar} from "@/app/components/Navbar";
import {Content} from "@/app/components/Content";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen flex flex-col">
        <Navbar />
        <Content>
            {children}
        </Content>
    </div>
}
