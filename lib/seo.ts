import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Ashwin Jadhav ─ developer';
	const description =
		'Hey there 👋, I am a full-stack web developer since 2020. I love to make websites and to keep learning and experimenting with new technologies.';

	return {
		title,
		description,
		canonical: `https://ashwinjadhav.netlify.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Ashwin Jadhav',
			url: `https://ashwinadhav.netlify.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
