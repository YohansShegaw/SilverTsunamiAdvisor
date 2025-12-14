// components/ui/slider.tsx
import * as React from "react";
import {
  Slider as RadixSlider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@radix-ui/react-slider";

interface SliderProps extends React.ComponentProps<typeof RadixSlider> {}

export function Slider(props: SliderProps) {
  return (
    <RadixSlider {...props} className="w-full h-5">
      <SliderTrack className="relative bg-gray-200 rounded-full h-1">
        <SliderRange className="absolute bg-blue-500 rounded-full h-1" />
      </SliderTrack>
      <SliderThumb className="block w-5 h-5 bg-blue-500 rounded-full" />
    </RadixSlider>
  );
}
