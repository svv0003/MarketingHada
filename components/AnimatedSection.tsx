"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
    children: ReactNode;
    className?: string;
};

export default function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
