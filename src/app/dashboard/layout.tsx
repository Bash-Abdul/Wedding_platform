"use client"

import {
    LayoutDashboard,
    Upload,
    Images,
    Gift,
    CreditCard,
    List,
    Settings,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { useAuthActions } from "@/hooks/useAuthActions";
import { useRouter } from 'next/navigation';
import { NavLink } from "@/components/Dashboard/NavLinks";
import { useState } from "react";


type LinkItem = {
    href: string,
    label: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    exact?: boolean,
};

const DASH_LINKS: LinkItem[] = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
    { href: "/dashboard/uploads", label: "Uploads", icon: Upload },
    { href: "/dashboard/gallery", label: "Gallery Preview", icon: Images },
    { href: "/dashboard/wishlist", label: "Wishlist", icon: Gift },
    { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
    { href: "/dashboard/rsvp", label: "RSVP List", icon: List },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
];



export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>
) {

    const [demoCreated, setDemoCreated] = useState(true);

    const { logout } = useAuthActions();
    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await logout();
        router.replace("/auth/login");
    }

    const leftAvatarBg =
        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjMr641dw1rpmeskU3R77v-8Ewark57IdgaNGrM22hZYr_lYFgjRZV1Vh3jT-j4hhST34JGJLubxrG68hOfAE1vB4nxRzSG41QdT_XGp1Q3WM5yiIbcW_2f4hMK9jEJyt70eA9D3umyERPMvKyrAfAra_zJYsTu73OVmwexZCVtNERJfaNwZcy5edeUaINm5lS8rM4aLke2-WwbhgWt0DUNspmgvEZvXe4CyVTdKxUsBPuBLSIrVS9GAxjueNL2mGSbCwZ2AWstN8")';


    return (
        <div className="font-display bg-[#f8f6f6] text-[#181113] h-screen overflow-hidden">

            {/* FIXED SIDEBAR */}
            <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-[#e5dcdf] flex flex-col justify-between">
                <div className="p-4 overflow-y-auto">
                    <div className="flex items-center gap-3 p-2 mb-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            aria-label="Profile picture of Alex and Jordan"
                            style={{ backgroundImage: leftAvatarBg }}
                        />
                        <div className="flex flex-col">
                            <h1 className="text-[#181113] text-base font-semibold leading-normal">
                                Alex &amp; Jordan
                            </h1>
                            <p className="text-[#886370] text-sm font-normal leading-normal">
                                Wedding Microsite Dashboard
                            </p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1">
                        {DASH_LINKS.map(({ href, label, icon: Icon, exact }) => (
                            <NavLink key={href} href={href} exact={exact}>
                                <Icon className="w-5 h-5" />
                                <p className="text-sm font-medium leading-normal">{label}</p>
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div>
                    <div className="p-4 text-center">
                        {
                            demoCreated ? (
                                <Link href={'/demo'} className="text-sm bg-[#f7bacf] inline-block py-4 px-12 font-semibold rounded-full">Create Microsite</Link>
                            ) : (
                                <Link href={'/demo'} className="bg-[#f7bacf] inline-block py-4 px-12 font-semibold rounded-full">View Microsite</Link>
                            )
                        }
                    </div>

                <div className="p-4 border-t border-[#e5dcdf]" onClick={handleLogout}>
                    <a
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        href="#"
                    >
                        <LogOut className="w-5 h-5" />
                        <p className="text-sm font-medium leading-normal">Log Out</p>
                    </a>
                </div>
                </div>
            </aside>


            <main className="ml-64 h-screen overflow-y-auto p-6 lg:p-10">

                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>


        </div>
    )
}