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
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
