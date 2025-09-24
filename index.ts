// icon props
export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    backgroundColor?: string;
    strokeWidth?: number;
    filled?: boolean;
}

// imports
import * as BusinessIcons from './bussiness';
import * as EducationIcons from './educations';
import * as GameIcons from './games';
import * as GraphicsIcons from './graphics';
import * as MonneyIcons from './monney';
import * as SysAdminIcons from './sysadmin';
import * as UIIcons from './ui';
import * as OSIcons from './os';
import * as AIIcons from './ai';
import * as MediaIcons from './media';
import * as ProgrammingIcons from './programming';
import * as FaceIcons from './face';
import * as SocialIcons from './social';
import * as FilterIcons from './filter';

// merged export
export const Icons = {
    ...BusinessIcons,
    ...EducationIcons,
    ...GameIcons,
    ...GraphicsIcons,
    ...MonneyIcons,
    ...SysAdminIcons,
    ...UIIcons,
    ...OSIcons,
    ...AIIcons,
    ...MediaIcons,
    ...ProgrammingIcons,
    ...FaceIcons,
    ...SocialIcons,
    ...FilterIcons,
};

