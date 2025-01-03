import { useState } from 'react';
import { Bell, Home, Menu, MessageCircle, Search, User } from 'lucide-react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { DropdownMenu } from './drop-down-menu';
import { Link, useNavigate } from 'react-router-dom';
import { removeTokens } from '@/utils/localStorage';

export function Header() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        removeTokens();
        window.location.reload();
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
            <div className="container flex h-14 items-center">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                        FakeBook
                    </Link>
                    <div className="hidden sm:flex items-center space-x-2 rounded-full bg-muted px-3 py-1">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search FakeBook"
                            className="w-[200px] border-0 bg-transparent p-3 focus-visible:ring-0"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center ml-auto space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex"
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <Home className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            navigate('/chat');
                        }}
                    >
                        <MessageCircle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <div className="relative">
                        <Button variant="ghost" size="icon" onClick={toggleDropdown}>
                            <User className="h-5 w-5" />
                        </Button>
                        {dropdownOpen && <DropdownMenu onLogout={handleLogout} />}
                    </div>
                </div>
            </div>
        </header>
    );
}
