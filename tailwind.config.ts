import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                tall: { raw: '(min-height: 800px)' },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                mainPageBlackGradient:
                    ' linear-gradient(87deg, #CCFFCF -0.19%, #91CEAD 2.01%, #5FAC96 5.41%, #308187 20.14%, #3A5461 46.07%, rgba(212, 43, 39, 0.87) 63.27%, rgba(250, 70, 45, 0.93) 74.36%, rgba(250, 68, 50, 0.85) 85.01%, #231C3A 97.34%);',
                mainPageWhiteGradient:
                    'linear-gradient(91deg, #DCF2DD -2.77%, #51D6FE 12.38%, #D2FFA6 26.63%, rgba(255, 139, 4, 0.89) 52.16%, rgba(255, 126, 110, 0.93) 62.49%, #FF5858 74.85%, #FF4FBB 81.27%, #2850FF 98.85%);',
                circleChartInternalPoint: 'linear-gradient(#165adf, #40b9ff);',
            },
            zIndex: {
                1: '1',
            },
            spacing: {
                30: '7.5rem', // 120px
                '23vh': '23vh',
            },
            scale: {
                '135': '1.35',
            },
            gridTemplateColumns: {
                progressContainer: '1fr minmax(240px, 20%)',
            },
            colors: {
                statisticButton: '#fb5932',
                dashboardGray: '#7c807e',
                customTooltip: '#202020',
            },
            fontSize: {
                '2xs': ['0.625rem', '0.875rem'],
            },
        },
    },
    plugins: [],
}
export default config
