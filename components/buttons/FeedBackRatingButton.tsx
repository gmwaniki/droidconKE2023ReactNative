import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import type { TypeRatingStates } from '../../app/(app)/feedback';
import StyledText from '../common/StyledText';

type Props = {
  onPress: (value: number) => void;
  rating: TypeRatingStates;
  testID?: string;
};

const FeedBackRatingButton = ({ onPress, rating }: Props) => {
  const { colors } = useTheme();
  const { icon, text, value } = rating;

  return (
    <Pressable style={[styles.pressableEmoji, { backgroundColor: colors.bg }]} onPress={() => onPress(value)}>
      <Text style={styles.FormRatingText}>{icon}</Text>
      <StyledText font="bold" size="sm">
        {text}
      </StyledText>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  FormRatingText: {
    fontSize: 30,
  },
  pressableEmoji: {
    minWidth: 67,
    minHeight: 67,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default FeedBackRatingButton;
