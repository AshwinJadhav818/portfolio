import splitbee from '@splitbee/web';
import styled from '@emotion/styled';
import toast from 'react-hot-toast';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useCopyToClipboard } from 'react-use';
import { useTheme } from 'next-themes';

import TailwindCSS from '~/tailwind.config';
import { List, Pill } from '~/components';
import { Layout } from '~/layouts';
import { ListAction, ListActionType, Theme } from '~/types';

import type { CSSProperties } from 'react';
import type { GetStaticProps } from 'next';

import type { Technology } from '~/types';

interface TechnologiesProps {
	technologies?: Technology;
}

const Container = styled.div(tw`
	my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const PillContainer = styled.div(tw`
	m-2 mt-0
`);

const StyledPill = styled(Pill.Standard)(tw`
	flex items-center justify-center w-full \
	md:pb-2 \
	bg-primary-500 bg-opacity-15 saturate-200 \
	text-sm text-primary-500 \
	rounded-lg \
`);

export const getStaticProps: GetStaticProps<TechnologiesProps> = async () => {
	const { default: rawTechnologies } = await import('~/data/technologies.json');

	const technologies = (rawTechnologies as Technologies).sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	return {
		props: {
			technologies,
		},
	};
};

export default function TechnologiesPage({ technologies }: TechnologiesProps) {
	const { theme } = useTheme();
	const [state, copyToClipboard] = useCopyToClipboard();

	const grayColors = TailwindCSS.theme.extend.colors.gray;
	const isDark = theme === Theme.DARK;
	const toastOptions = {
		style: {
			background: isDark ? grayColors[800] : grayColors[50],
			color: isDark ? grayColors[400] : grayColors[700],
			borderWidth: '1px',
			borderColor: isDark ? grayColors[500] : grayColors[100],
		} as CSSProperties,
	};

	return (
		<Layout.Default seo={{ title: 'Ashwin Jadhav ─ technologies' }}>
			<Container>
				<Content>
					<List.Container
						item={(technology, index) => (
							<List.Item
								actions={[
									{
										type: ListActionType.LINK,
										icon: 'feather:external-link',
										label: `${technology.name} homepage`,
										href: technology.homepage,
									},
								]}
								description={technology.description}
								icon={technology.icon}
								iconColor={technology.color}
								key={index}
								title={technology.name}></List.Item>
						)}
						items={technologies}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
