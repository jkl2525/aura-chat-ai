export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  image?: string; // Base64 image data or URL
  unfiltered?: boolean;
}

export type AuraState = 'idle' | 'thinking' | 'talking' | 'happy' | 'surprised' | 'annoyed' | 'smug' | 'curious' | 'bored' | 'skeptical' | 'blushing';

export interface ClothingState {
  top: 'tactical' | 'cyber-white' | 'cyber-blue' | 'bikini-red' | 'none';
  bottom: 'tactical' | 'cyber-white' | 'cyber-blue' | 'bikini-red' | 'none';
  underwear: 'standard' | 'none';
  gloves: boolean;
  boots: boolean;
}

export interface AuraResponse {
  text: string;
  expression: AuraState;
  generateImagePrompt?: string;
}
