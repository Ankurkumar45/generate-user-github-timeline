import React from 'react';

function Footer() {
    return (
        <>
            <footer class="mt-8 text-center text-xs text-slate-500">
                Uses the public GitHub REST API. Unauthenticated requests are rate-limited (typically 60/hour).
            </footer>
        </>
    );
}

export default Footer;
