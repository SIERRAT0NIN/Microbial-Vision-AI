import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  TextareaInput,
  TextArea,
  Card,
  SearchIcon,
} from "@gluestack-ui/themed";
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
  AddIcon,
} from "@gluestack-ui/themed";
import CameraBtn from "./CameraBtn";
const UserInput = () => {
  const [plateValue, setPlateValue] = React.useState("first");
  const [sampleLocation, setSampleLocation] = React.useState("first");

  return (
    <View className=" w-5/6 mx-auto">
      <Card variant="elevated">
        <CameraBtn />
        <TextInput
          placeholder="Organism Description"
          className="mt-5 w-1/2 mx-auto"
          // mode="outlined"
          selectTextOnFocus
          selectionColor="purple"
          dense
          multiline
          onFocus={() => console.log("onfocus")}
        />
        <View className="w-1/2 mx-auto ">
          <Select>
            <SelectTrigger variant="rounded" size="md">
              <SelectInput placeholder="Type of organism" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />

              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Bacteria" value="bacteria" />
                <SelectItem label="Fungi" value="fungi" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Select>
            <SelectTrigger variant="rounded" size="md">
              <SelectInput placeholder="Type of plate" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />

              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="ABC" value="abc" />
                <SelectItem label="DEF" value="def" />
                <SelectItem label="GHI" value="ghi" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Select>
            <SelectTrigger variant="rounded" size="md">
              <SelectInput placeholder="Sampled from " />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Air" value="air" />
                <SelectItem label="Surface" value="surface" />
                <SelectItem label="Water" value="water" />
              </SelectContent>
            </SelectPortal>
          </Select>

          <Button
            size="lg"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={true}
          >
            <ButtonText>Send sample </ButtonText>
            <ButtonIcon as={SearchIcon} />
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({});
