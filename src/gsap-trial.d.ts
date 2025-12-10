declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: string | Element | Element[] | (string | Element)[], options?: any);
    revert(): void;
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config?: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
    effects(element: string | Element, config?: any): void;
  }
}
