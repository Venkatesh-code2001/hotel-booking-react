/// <reference types="react-scripts" />

declare module 'react-date-range' {
  export const DateRange: any;
  export type Range = {
    startDate?: Date;
    endDate?: Date;
    key?: string;
    [key: string]: any;
  };
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
