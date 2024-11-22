import logo_only_sm from '@/assets/logo_only_sm.svg';
import logo_only_md from '@/assets/logo_only_md.svg';
import logo_only_lg from '@/assets/logo_only_lg.svg';
import logo_lively_sm from '@/assets/logo_lively_sm.svg';
import logo_lively_lg from '@/assets/logo_lively_lg.svg';

interface ILogoProps {
    size?: 'small' | 'medium' | 'large';
    showName?: boolean;
    style?: React.CSSProperties;
}

const Logo = ({ size = 'small', showName = true, style }: ILogoProps) => {
    const getLogoSrc = () => {
        if (showName) {
            return size === 'small' ? logo_lively_sm : logo_lively_lg;
        } else {
            switch (size) {
                case 'small':
                    return logo_only_sm;
                case 'medium':
                    return logo_only_md;
                case 'large':
                default:
                    return logo_only_lg;
            }
        }
    };

    return <img src={getLogoSrc()} alt='Logo' style={style} />;
};

export default Logo;
