import {WysiwygConstantsEnum} from '../../js/components/journal/context/constants'

export type WysiwygContextConstantsType = $Keys<typeof WysiwygConstantsEnum>
export type WysiwygControlsDrawerMouseEventType = {
  displayDrawer?:boolean,
  drawerComponent?:$FlowCurrentBranch,
  message:string,
}

export type WysiwygPropsType = {|
  classMaps:RefObjOfArrayStr,
  removeWysiwyg: (false) => void, // TODO: [@mlnck] UPDATE ~ Is this still relevant?
|}

type baseWysiwygCssType = {
  cursor:string,
  ':hover':{
    backgroundColor:string,
    color:string
  }
}
export type WysiwygDecoratorCommonPropsType = {
  commonCss:baseWysiwygCssType,
  setFormat:(WysiwygContextConstantsType) => void,
  setDrawerContent:(WysiwygControlsDrawerMouseEventType) => void
}
export type WysiwygDecoratorExtendedPropsType = {
  ...WysiwygDecoratorCommonPropsType,
  ...WysiwygPropsType
}

export type WysiwygControlsDrawerPropsType = {
  classMap:ObjOfArrayStr,
  msg:string,
  customDrawerComponent?:$FlowCurrentBranch,
  setCustomDrawerComponentFormat:$FlowCurrentBranch, //(any) => void,
  // selectionComponent?:React$Node,
  textInputLabel?:string, // TODO: [@mlnck] REMOVE ~ Using the component - this should no longer be needed
}
export type WysiwygDefaultFormatType = {
  customDrawerComponent?:$FlowCurrentBranch,
  displayDrawer:boolean,
  msg:string
}
