"use client";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Container = ({ children, className }: Props) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default Container
