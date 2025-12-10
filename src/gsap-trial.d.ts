declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: string | Element | Element[], options?: any);
    revert(): void;
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config?: any): ScrollSmoother;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    kill(): void;
    effects(element: string | Element, config?: any): void;
  }
}
