declare module '*.css';
declare module "*.png";
declare module '*.less';
declare module '*.ico';
declare module '*.svg' {
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
    const url: string;
    export default url;
}
