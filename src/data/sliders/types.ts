export interface SliderLayer {
  id: number;
  type: string;
  text: string;
  image: string;
  left: string;
  top: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  delayin: number;
  durationin: number;
  fadein: boolean;
  rotatein: number;
  rotatexin: number;
  rotateyin: number;
  scalexin: number;
  scaleyin: number;
  offsetxin: number;
  offsetyin: number;
  easingin: string;
  showuntil: number;
  delayout: number;
  durationout: number;
  fadeout: boolean;
  rotateout: number;
  rotatexout: number;
  rotateyout: number;
  scalexout: number;
  scaleyout: number;
  offsetxout: number;
  offsetyout: number;
  easingout: string;
}

export interface SliderConfig {
  slug: string;
  name: string;
  width: number;
  height: number;
  background: string;
  slideDelay: number;
  fadeInDuration: number;
  layers: SliderLayer[];
}
