import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Text,
  Screen,
  CharacterRowItem
} from "../../components"
import { NavigatorParamList } from "../../navigators"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: "bold" }

const TITLE: TextStyle = {
  ...BOLD,
  color: "#000000",
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const TAGLINE: TextStyle = {
  color: "#000000",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}

export const TestScreen: FC<StackScreenProps<NavigatorParamList, "test">> = observer(() => {
    const {characterStore} = useStores();

    // here's the data
    const characters = characterStore.characters;

    console.warn(characters)



    return (
      <View testID="DemoScreen" style={FULL}>
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={TITLE} preset="header" tx="testScreen.title" />
          <Text style={TAGLINE} tx="testScreen.text" />
        </Screen>
      </View>
    )
  },
)
