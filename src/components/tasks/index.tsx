import { Text, TouchableOpacity, View, Pressable } from "react-native";

import { styles } from "./styles";

type Props = { description: string; onRemove: () => void }

export function Tasks({ description, onRemove }: Props) {

  return (

    <View style={styles.container}>
      <Text style={styles.name}>
        {description}
      </Text>

      <Pressable
        onPress={onRemove}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(178,34,34)' : 'transparent',
            margin: 10,
            width: 32,
            height: 32,
          },
          styles.wrapperCustom,
        ]}>

        <Text style={styles.buttonText}>
          -
        </Text>
      </Pressable>

    </View>
  )
}
