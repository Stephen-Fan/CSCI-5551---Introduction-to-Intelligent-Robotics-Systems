
"use strict";

let KortexError = require('./KortexError.js');
let ApiOptions = require('./ApiOptions.js');
let ErrorCodes = require('./ErrorCodes.js');
let SubErrorCodes = require('./SubErrorCodes.js');
let SafetyIdentifierBankA = require('./SafetyIdentifierBankA.js');
let EncoderDerivativeParameters = require('./EncoderDerivativeParameters.js');
let ControlLoopParameters = require('./ControlLoopParameters.js');
let CommandMode = require('./CommandMode.js');
let ControlLoop = require('./ControlLoop.js');
let StepResponse = require('./StepResponse.js');
let Servoing = require('./Servoing.js');
let CoggingFeedforwardMode = require('./CoggingFeedforwardMode.js');
let AxisOffsets = require('./AxisOffsets.js');
let CustomDataSelection = require('./CustomDataSelection.js');
let CoggingFeedforwardModeInformation = require('./CoggingFeedforwardModeInformation.js');
let TorqueOffset = require('./TorqueOffset.js');
let FrequencyResponse = require('./FrequencyResponse.js');
let LoopSelection = require('./LoopSelection.js');
let PositionCommand = require('./PositionCommand.js');
let CustomDataIndex = require('./CustomDataIndex.js');
let CommandModeInformation = require('./CommandModeInformation.js');
let VectorDriveParameters = require('./VectorDriveParameters.js');
let ActuatorConfig_ServiceVersion = require('./ActuatorConfig_ServiceVersion.js');
let ActuatorConfig_ControlModeInformation = require('./ActuatorConfig_ControlModeInformation.js');
let ActuatorConfig_SafetyLimitType = require('./ActuatorConfig_SafetyLimitType.js');
let TorqueCalibration = require('./TorqueCalibration.js');
let ActuatorConfig_ControlMode = require('./ActuatorConfig_ControlMode.js');
let ControlLoopSelection = require('./ControlLoopSelection.js');
let RampResponse = require('./RampResponse.js');
let AxisPosition = require('./AxisPosition.js');
let CommandFlags = require('./CommandFlags.js');
let ActuatorCyclic_ServiceVersion = require('./ActuatorCyclic_ServiceVersion.js');
let ActuatorCyclic_MessageId = require('./ActuatorCyclic_MessageId.js');
let ActuatorCyclic_Command = require('./ActuatorCyclic_Command.js');
let ActuatorCyclic_CustomData = require('./ActuatorCyclic_CustomData.js');
let ActuatorCyclic_Feedback = require('./ActuatorCyclic_Feedback.js');
let StatusFlags = require('./StatusFlags.js');
let TransformationRow = require('./TransformationRow.js');
let ControllerElementState = require('./ControllerElementState.js');
let ConstrainedOrientation = require('./ConstrainedOrientation.js');
let ControllerNotification_state = require('./ControllerNotification_state.js');
let TrajectoryInfo = require('./TrajectoryInfo.js');
let FullIPv4Configuration = require('./FullIPv4Configuration.js');
let WrenchCommand = require('./WrenchCommand.js');
let LedState = require('./LedState.js');
let CommunicationInterfaceConfiguration = require('./CommunicationInterfaceConfiguration.js');
let ProtectionZoneList = require('./ProtectionZoneList.js');
let RFConfiguration = require('./RFConfiguration.js');
let ActivateMapHandle = require('./ActivateMapHandle.js');
let ZoneShape = require('./ZoneShape.js');
let MapElement = require('./MapElement.js');
let SequenceTasks = require('./SequenceTasks.js');
let TrajectoryErrorType = require('./TrajectoryErrorType.js');
let CartesianSpeed = require('./CartesianSpeed.js');
let Base_CapSenseConfig = require('./Base_CapSenseConfig.js');
let ControllerType = require('./ControllerType.js');
let MappingHandle = require('./MappingHandle.js');
let MapGroupList = require('./MapGroupList.js');
let ProtectionZoneHandle = require('./ProtectionZoneHandle.js');
let ControllerState = require('./ControllerState.js');
let MapEvent = require('./MapEvent.js');
let SignalQuality = require('./SignalQuality.js');
let MapEvent_events = require('./MapEvent_events.js');
let Xbox360AnalogInputIdentifier = require('./Xbox360AnalogInputIdentifier.js');
let Timeout = require('./Timeout.js');
let SequenceTasksRange = require('./SequenceTasksRange.js');
let ConstrainedJointAngles = require('./ConstrainedJointAngles.js');
let FirmwareBundleVersions = require('./FirmwareBundleVersions.js');
let ServoingModeInformation = require('./ServoingModeInformation.js');
let NetworkNotification = require('./NetworkNotification.js');
let SequenceList = require('./SequenceList.js');
let TwistCommand = require('./TwistCommand.js');
let GpioCommand = require('./GpioCommand.js');
let Waypoint_type_of_waypoint = require('./Waypoint_type_of_waypoint.js');
let Base_ControlModeInformation = require('./Base_ControlModeInformation.js');
let ActionEvent = require('./ActionEvent.js');
let JointTrajectoryConstraintType = require('./JointTrajectoryConstraintType.js');
let Snapshot = require('./Snapshot.js');
let Waypoint = require('./Waypoint.js');
let CartesianLimitation = require('./CartesianLimitation.js');
let ConfigurationChangeNotification_configuration_change = require('./ConfigurationChangeNotification_configuration_change.js');
let ProtectionZoneNotification = require('./ProtectionZoneNotification.js');
let Base_ServiceVersion = require('./Base_ServiceVersion.js');
let CartesianWaypoint = require('./CartesianWaypoint.js');
let RobotEventNotificationList = require('./RobotEventNotificationList.js');
let Xbox360DigitalInputIdentifier = require('./Xbox360DigitalInputIdentifier.js');
let Action = require('./Action.js');
let Gen3GpioPinId = require('./Gen3GpioPinId.js');
let WrenchMode = require('./WrenchMode.js');
let Base_ControlMode = require('./Base_ControlMode.js');
let FactoryNotification = require('./FactoryNotification.js');
let JointAngles = require('./JointAngles.js');
let ActionNotification = require('./ActionNotification.js');
let JointAngle = require('./JointAngle.js');
let SystemTime = require('./SystemTime.js');
let TrajectoryErrorElement = require('./TrajectoryErrorElement.js');
let NetworkType = require('./NetworkType.js');
let TrajectoryErrorIdentifier = require('./TrajectoryErrorIdentifier.js');
let WrenchLimitation = require('./WrenchLimitation.js');
let UserList = require('./UserList.js');
let ChangeTwist = require('./ChangeTwist.js');
let EmergencyStop = require('./EmergencyStop.js');
let ControllerConfiguration = require('./ControllerConfiguration.js');
let BridgeStatus = require('./BridgeStatus.js');
let ProtectionZoneNotificationList = require('./ProtectionZoneNotificationList.js');
let SoundType = require('./SoundType.js');
let MapGroupHandle = require('./MapGroupHandle.js');
let BridgeResult = require('./BridgeResult.js');
let WifiEnableState = require('./WifiEnableState.js');
let GripperRequest = require('./GripperRequest.js');
let SequenceInfoNotificationList = require('./SequenceInfoNotificationList.js');
let AppendActionInformation = require('./AppendActionInformation.js');
let ControlModeNotificationList = require('./ControlModeNotificationList.js');
let FullUserProfile = require('./FullUserProfile.js');
let OperatingMode = require('./OperatingMode.js');
let ControllerHandle = require('./ControllerHandle.js');
let PasswordChange = require('./PasswordChange.js');
let IPv4Configuration = require('./IPv4Configuration.js');
let SequenceTaskConfiguration = require('./SequenceTaskConfiguration.js');
let ActionHandle = require('./ActionHandle.js');
let BridgeList = require('./BridgeList.js');
let SafetyEvent = require('./SafetyEvent.js');
let Base_SafetyIdentifier = require('./Base_SafetyIdentifier.js');
let TwistLimitation = require('./TwistLimitation.js');
let Point = require('./Point.js');
let AngularWaypoint = require('./AngularWaypoint.js');
let MapGroup = require('./MapGroup.js');
let FactoryEvent = require('./FactoryEvent.js');
let GpioConfigurationList = require('./GpioConfigurationList.js');
let TransformationMatrix = require('./TransformationMatrix.js');
let CartesianLimitationList = require('./CartesianLimitationList.js');
let ControllerConfigurationMode = require('./ControllerConfigurationMode.js');
let Twist = require('./Twist.js');
let WifiSecurityType = require('./WifiSecurityType.js');
let SequenceTasksPair = require('./SequenceTasksPair.js');
let MappingInfoNotification = require('./MappingInfoNotification.js');
let Query = require('./Query.js');
let Delay = require('./Delay.js');
let JointsLimitationsList = require('./JointsLimitationsList.js');
let UserNotificationList = require('./UserNotificationList.js');
let ProtectionZoneEvent = require('./ProtectionZoneEvent.js');
let MapList = require('./MapList.js');
let MapHandle = require('./MapHandle.js');
let GripperCommand = require('./GripperCommand.js');
let KinematicTrajectoryConstraints = require('./KinematicTrajectoryConstraints.js');
let Orientation = require('./Orientation.js');
let ActionNotificationList = require('./ActionNotificationList.js');
let SafetyNotificationList = require('./SafetyNotificationList.js');
let Base_Position = require('./Base_Position.js');
let ControllerEvent = require('./ControllerEvent.js');
let ChangeJointSpeeds = require('./ChangeJointSpeeds.js');
let ControllerEventType = require('./ControllerEventType.js');
let ConstrainedPosition = require('./ConstrainedPosition.js');
let ShapeType = require('./ShapeType.js');
let UserProfileList = require('./UserProfileList.js');
let Gripper = require('./Gripper.js');
let RobotEventNotification = require('./RobotEventNotification.js');
let WifiConfiguration = require('./WifiConfiguration.js');
let OperatingModeInformation = require('./OperatingModeInformation.js');
let GpioBehavior = require('./GpioBehavior.js');
let JointTorque = require('./JointTorque.js');
let RobotEvent = require('./RobotEvent.js');
let SequenceTasksConfiguration = require('./SequenceTasksConfiguration.js');
let OperatingModeNotificationList = require('./OperatingModeNotificationList.js');
let ConfigurationChangeNotificationList = require('./ConfigurationChangeNotificationList.js');
let Action_action_parameters = require('./Action_action_parameters.js');
let TrajectoryInfoType = require('./TrajectoryInfoType.js');
let ControllerElementHandle_identifier = require('./ControllerElementHandle_identifier.js');
let CartesianTrajectoryConstraint_type = require('./CartesianTrajectoryConstraint_type.js');
let SequenceTask = require('./SequenceTask.js');
let ArmStateNotification = require('./ArmStateNotification.js');
let PreComputedJointTrajectoryElement = require('./PreComputedJointTrajectoryElement.js');
let ActuatorInformation = require('./ActuatorInformation.js');
let Ssid = require('./Ssid.js');
let ConstrainedPose = require('./ConstrainedPose.js');
let NetworkNotificationList = require('./NetworkNotificationList.js');
let WristDigitalInputIdentifier = require('./WristDigitalInputIdentifier.js');
let MappingList = require('./MappingList.js');
let BridgeConfig = require('./BridgeConfig.js');
let IPv4Information = require('./IPv4Information.js');
let JointNavigationDirection = require('./JointNavigationDirection.js');
let UserEvent = require('./UserEvent.js');
let Base_RotationMatrix = require('./Base_RotationMatrix.js');
let UserNotification = require('./UserNotification.js');
let ControllerList = require('./ControllerList.js');
let SequenceInformation = require('./SequenceInformation.js');
let TrajectoryContinuityMode = require('./TrajectoryContinuityMode.js');
let ChangeWrench = require('./ChangeWrench.js');
let Admittance = require('./Admittance.js');
let ControllerNotificationList = require('./ControllerNotificationList.js');
let JointTorques = require('./JointTorques.js');
let MappingInfoNotificationList = require('./MappingInfoNotificationList.js');
let BackupEvent = require('./BackupEvent.js');
let WaypointList = require('./WaypointList.js');
let SequenceInfoNotification = require('./SequenceInfoNotification.js');
let BluetoothEnableState = require('./BluetoothEnableState.js');
let GpioAction = require('./GpioAction.js');
let BridgeType = require('./BridgeType.js');
let RequestedActionType = require('./RequestedActionType.js');
let SequenceTaskHandle = require('./SequenceTaskHandle.js');
let ConfigurationNotificationEvent = require('./ConfigurationNotificationEvent.js');
let OperatingModeNotification = require('./OperatingModeNotification.js');
let SnapshotType = require('./SnapshotType.js');
let CartesianTrajectoryConstraint = require('./CartesianTrajectoryConstraint.js');
let ActionList = require('./ActionList.js');
let WifiInformation = require('./WifiInformation.js');
let ArmStateInformation = require('./ArmStateInformation.js');
let ControllerElementEventType = require('./ControllerElementEventType.js');
let ControllerConfigurationList = require('./ControllerConfigurationList.js');
let BridgePortConfig = require('./BridgePortConfig.js');
let Mapping = require('./Mapping.js');
let ServoingModeNotification = require('./ServoingModeNotification.js');
let NavigationDirection = require('./NavigationDirection.js');
let Map = require('./Map.js');
let WifiInformationList = require('./WifiInformationList.js');
let ControllerBehavior = require('./ControllerBehavior.js');
let AdmittanceMode = require('./AdmittanceMode.js');
let IKData = require('./IKData.js');
let BridgeIdentifier = require('./BridgeIdentifier.js');
let WifiEncryptionType = require('./WifiEncryptionType.js');
let Pose = require('./Pose.js');
let Faults = require('./Faults.js');
let Base_Stop = require('./Base_Stop.js');
let Sequence = require('./Sequence.js');
let ConstrainedJointAngle = require('./ConstrainedJointAngle.js');
let JointSpeed = require('./JointSpeed.js');
let Base_GpioConfiguration = require('./Base_GpioConfiguration.js');
let SequenceHandle = require('./SequenceHandle.js');
let AdvancedSequenceHandle = require('./AdvancedSequenceHandle.js');
let PreComputedJointTrajectory = require('./PreComputedJointTrajectory.js');
let JointLimitation = require('./JointLimitation.js');
let EventIdSequenceInfoNotification = require('./EventIdSequenceInfoNotification.js');
let GpioEvent = require('./GpioEvent.js');
let ProtectionZone = require('./ProtectionZone.js');
let ServoingMode = require('./ServoingMode.js');
let ActionExecutionState = require('./ActionExecutionState.js');
let WifiConfigurationList = require('./WifiConfigurationList.js');
let LimitationType = require('./LimitationType.js');
let NetworkEvent = require('./NetworkEvent.js');
let ControllerNotification = require('./ControllerNotification.js');
let ControllerElementHandle = require('./ControllerElementHandle.js');
let FirmwareComponentVersion = require('./FirmwareComponentVersion.js');
let Base_ControlModeNotification = require('./Base_ControlModeNotification.js');
let Base_JointSpeeds = require('./Base_JointSpeeds.js');
let Base_CapSenseMode = require('./Base_CapSenseMode.js');
let ConfigurationChangeNotification = require('./ConfigurationChangeNotification.js');
let Wrench = require('./Wrench.js');
let ControllerInputType = require('./ControllerInputType.js');
let JointTrajectoryConstraint = require('./JointTrajectoryConstraint.js');
let NetworkHandle = require('./NetworkHandle.js');
let TrajectoryErrorReport = require('./TrajectoryErrorReport.js');
let GripperMode = require('./GripperMode.js');
let Base_RotationMatrixRow = require('./Base_RotationMatrixRow.js');
let SwitchControlMapping = require('./SwitchControlMapping.js');
let ServoingModeNotificationList = require('./ServoingModeNotificationList.js');
let ProtectionZoneInformation = require('./ProtectionZoneInformation.js');
let ActionType = require('./ActionType.js');
let Finger = require('./Finger.js');
let GpioPinConfiguration = require('./GpioPinConfiguration.js');
let WaypointValidationReport = require('./WaypointValidationReport.js');
let GpioPinPropertyFlags = require('./GpioPinPropertyFlags.js');
let UserProfile = require('./UserProfile.js');
let BaseFeedback = require('./BaseFeedback.js');
let BaseCyclic_Feedback = require('./BaseCyclic_Feedback.js');
let BaseCyclic_Command = require('./BaseCyclic_Command.js');
let BaseCyclic_ServiceVersion = require('./BaseCyclic_ServiceVersion.js');
let BaseCyclic_CustomData = require('./BaseCyclic_CustomData.js');
let ActuatorFeedback = require('./ActuatorFeedback.js');
let ActuatorCustomData = require('./ActuatorCustomData.js');
let ActuatorCommand = require('./ActuatorCommand.js');
let DeviceTypes = require('./DeviceTypes.js');
let Permission = require('./Permission.js');
let NotificationHandle = require('./NotificationHandle.js');
let UserProfileHandle = require('./UserProfileHandle.js');
let UARTParity = require('./UARTParity.js');
let CartesianReferenceFrame = require('./CartesianReferenceFrame.js');
let NotificationOptions = require('./NotificationOptions.js');
let SafetyStatusValue = require('./SafetyStatusValue.js');
let ArmState = require('./ArmState.js');
let CountryCode = require('./CountryCode.js');
let Empty = require('./Empty.js');
let SafetyNotification = require('./SafetyNotification.js');
let SafetyHandle = require('./SafetyHandle.js');
let UARTStopBits = require('./UARTStopBits.js');
let Unit = require('./Unit.js');
let DeviceHandle = require('./DeviceHandle.js');
let NotificationType = require('./NotificationType.js');
let UARTSpeed = require('./UARTSpeed.js');
let UARTDeviceIdentification = require('./UARTDeviceIdentification.js');
let Timestamp = require('./Timestamp.js');
let UARTWordLength = require('./UARTWordLength.js');
let CountryCodeIdentifier = require('./CountryCodeIdentifier.js');
let UARTConfiguration = require('./UARTConfiguration.js');
let Connection = require('./Connection.js');
let ControlConfig_ControlModeNotification = require('./ControlConfig_ControlModeNotification.js');
let CartesianReferenceFrameInfo = require('./CartesianReferenceFrameInfo.js');
let ControlConfigurationEvent = require('./ControlConfigurationEvent.js');
let JointSpeedSoftLimits = require('./JointSpeedSoftLimits.js');
let PayloadInformation = require('./PayloadInformation.js');
let ToolConfiguration = require('./ToolConfiguration.js');
let TwistAngularSoftLimit = require('./TwistAngularSoftLimit.js');
let ControlConfigurationNotification = require('./ControlConfigurationNotification.js');
let JointAccelerationSoftLimits = require('./JointAccelerationSoftLimits.js');
let ControlConfig_ControlModeInformation = require('./ControlConfig_ControlModeInformation.js');
let ControlConfig_ControlMode = require('./ControlConfig_ControlMode.js');
let LinearTwist = require('./LinearTwist.js');
let CartesianTransform = require('./CartesianTransform.js');
let AngularTwist = require('./AngularTwist.js');
let GravityVector = require('./GravityVector.js');
let TwistLinearSoftLimit = require('./TwistLinearSoftLimit.js');
let ControlConfig_ServiceVersion = require('./ControlConfig_ServiceVersion.js');
let DesiredSpeeds = require('./DesiredSpeeds.js');
let KinematicLimitsList = require('./KinematicLimitsList.js');
let KinematicLimits = require('./KinematicLimits.js');
let ControlConfig_JointSpeeds = require('./ControlConfig_JointSpeeds.js');
let ControlConfig_Position = require('./ControlConfig_Position.js');
let ModelNumber = require('./ModelNumber.js');
let SerialNumber = require('./SerialNumber.js');
let RunMode = require('./RunMode.js');
let PartNumberRevision = require('./PartNumberRevision.js');
let SafetyInformationList = require('./SafetyInformationList.js');
let IPv4Settings = require('./IPv4Settings.js');
let DeviceConfig_CapSenseConfig = require('./DeviceConfig_CapSenseConfig.js');
let SafetyInformation = require('./SafetyInformation.js');
let SafetyStatus = require('./SafetyStatus.js');
let RunModes = require('./RunModes.js');
let CalibrationItem = require('./CalibrationItem.js');
let PowerOnSelfTestResult = require('./PowerOnSelfTestResult.js');
let BootloaderVersion = require('./BootloaderVersion.js');
let SafetyConfiguration = require('./SafetyConfiguration.js');
let CalibrationStatus = require('./CalibrationStatus.js');
let DeviceConfig_ServiceVersion = require('./DeviceConfig_ServiceVersion.js');
let CalibrationParameter_value = require('./CalibrationParameter_value.js');
let CalibrationParameter = require('./CalibrationParameter.js');
let DeviceConfig_CapSenseMode = require('./DeviceConfig_CapSenseMode.js');
let DeviceConfig_SafetyLimitType = require('./DeviceConfig_SafetyLimitType.js');
let SafetyThreshold = require('./SafetyThreshold.js');
let CalibrationElement = require('./CalibrationElement.js');
let SafetyConfigurationList = require('./SafetyConfigurationList.js');
let DeviceType = require('./DeviceType.js');
let Calibration = require('./Calibration.js');
let CapSenseRegister = require('./CapSenseRegister.js');
let RebootRqst = require('./RebootRqst.js');
let PartNumber = require('./PartNumber.js');
let FirmwareVersion = require('./FirmwareVersion.js');
let SafetyEnable = require('./SafetyEnable.js');
let MACAddress = require('./MACAddress.js');
let CalibrationResult = require('./CalibrationResult.js');
let DeviceHandles = require('./DeviceHandles.js');
let DeviceManager_ServiceVersion = require('./DeviceManager_ServiceVersion.js');
let GripperConfig_SafetyIdentifier = require('./GripperConfig_SafetyIdentifier.js');
let RobotiqGripperStatusFlags = require('./RobotiqGripperStatusFlags.js');
let MotorFeedback = require('./MotorFeedback.js');
let GripperCyclic_ServiceVersion = require('./GripperCyclic_ServiceVersion.js');
let CustomDataUnit = require('./CustomDataUnit.js');
let GripperCyclic_Feedback = require('./GripperCyclic_Feedback.js');
let GripperCyclic_MessageId = require('./GripperCyclic_MessageId.js');
let GripperCyclic_Command = require('./GripperCyclic_Command.js');
let MotorCommand = require('./MotorCommand.js');
let GripperCyclic_CustomData = require('./GripperCyclic_CustomData.js');
let GPIOValue = require('./GPIOValue.js');
let I2CDevice = require('./I2CDevice.js');
let I2CReadParameter = require('./I2CReadParameter.js');
let EthernetDeviceIdentification = require('./EthernetDeviceIdentification.js');
let EthernetDuplex = require('./EthernetDuplex.js');
let UARTPortId = require('./UARTPortId.js');
let GPIOMode = require('./GPIOMode.js');
let I2CDeviceIdentification = require('./I2CDeviceIdentification.js');
let GPIOIdentifier = require('./GPIOIdentifier.js');
let GPIOIdentification = require('./GPIOIdentification.js');
let InterconnectConfig_SafetyIdentifier = require('./InterconnectConfig_SafetyIdentifier.js');
let I2CWriteRegisterParameter = require('./I2CWriteRegisterParameter.js');
let EthernetConfiguration = require('./EthernetConfiguration.js');
let I2CMode = require('./I2CMode.js');
let I2CData = require('./I2CData.js');
let GPIOState = require('./GPIOState.js');
let I2CWriteParameter = require('./I2CWriteParameter.js');
let InterconnectConfig_ServiceVersion = require('./InterconnectConfig_ServiceVersion.js');
let GPIOPull = require('./GPIOPull.js');
let I2CReadRegisterParameter = require('./I2CReadRegisterParameter.js');
let I2CDeviceAddressing = require('./I2CDeviceAddressing.js');
let I2CRegisterAddressSize = require('./I2CRegisterAddressSize.js');
let EthernetDevice = require('./EthernetDevice.js');
let InterconnectConfig_GPIOConfiguration = require('./InterconnectConfig_GPIOConfiguration.js');
let EthernetSpeed = require('./EthernetSpeed.js');
let I2CConfiguration = require('./I2CConfiguration.js');
let InterconnectCyclic_Command_tool_command = require('./InterconnectCyclic_Command_tool_command.js');
let InterconnectCyclic_Feedback = require('./InterconnectCyclic_Feedback.js');
let InterconnectCyclic_MessageId = require('./InterconnectCyclic_MessageId.js');
let InterconnectCyclic_Command = require('./InterconnectCyclic_Command.js');
let InterconnectCyclic_ServiceVersion = require('./InterconnectCyclic_ServiceVersion.js');
let InterconnectCyclic_Feedback_tool_feedback = require('./InterconnectCyclic_Feedback_tool_feedback.js');
let InterconnectCyclic_CustomData = require('./InterconnectCyclic_CustomData.js');
let InterconnectCyclic_CustomData_tool_customData = require('./InterconnectCyclic_CustomData_tool_customData.js');
let VisionModuleType = require('./VisionModuleType.js');
let BrakeType = require('./BrakeType.js');
let ModelId = require('./ModelId.js');
let BaseType = require('./BaseType.js');
let WristType = require('./WristType.js');
let InterfaceModuleType = require('./InterfaceModuleType.js');
let EndEffectorType = require('./EndEffectorType.js');
let ArmLaterality = require('./ArmLaterality.js');
let ProductConfigurationEndEffectorType = require('./ProductConfigurationEndEffectorType.js');
let CompleteProductConfiguration = require('./CompleteProductConfiguration.js');
let VisionConfig_ServiceVersion = require('./VisionConfig_ServiceVersion.js');
let VisionConfig_RotationMatrixRow = require('./VisionConfig_RotationMatrixRow.js');
let DistortionCoefficients = require('./DistortionCoefficients.js');
let ManualFocus = require('./ManualFocus.js');
let Sensor = require('./Sensor.js');
let OptionInformation = require('./OptionInformation.js');
let ExtrinsicParameters = require('./ExtrinsicParameters.js');
let FocusPoint = require('./FocusPoint.js');
let IntrinsicParameters = require('./IntrinsicParameters.js');
let FocusAction = require('./FocusAction.js');
let BitRate = require('./BitRate.js');
let TranslationVector = require('./TranslationVector.js');
let OptionIdentifier = require('./OptionIdentifier.js');
let Resolution = require('./Resolution.js');
let Option = require('./Option.js');
let SensorIdentifier = require('./SensorIdentifier.js');
let SensorFocusAction = require('./SensorFocusAction.js');
let FrameRate = require('./FrameRate.js');
let IntrinsicProfileIdentifier = require('./IntrinsicProfileIdentifier.js');
let OptionValue = require('./OptionValue.js');
let VisionNotification = require('./VisionNotification.js');
let VisionEvent = require('./VisionEvent.js');
let VisionConfig_RotationMatrix = require('./VisionConfig_RotationMatrix.js');
let SensorFocusAction_action_parameters = require('./SensorFocusAction_action_parameters.js');
let SensorSettings = require('./SensorSettings.js');
let FollowCartesianTrajectoryGoal = require('./FollowCartesianTrajectoryGoal.js');
let FollowCartesianTrajectoryResult = require('./FollowCartesianTrajectoryResult.js');
let FollowCartesianTrajectoryActionFeedback = require('./FollowCartesianTrajectoryActionFeedback.js');
let FollowCartesianTrajectoryFeedback = require('./FollowCartesianTrajectoryFeedback.js');
let FollowCartesianTrajectoryAction = require('./FollowCartesianTrajectoryAction.js');
let FollowCartesianTrajectoryActionResult = require('./FollowCartesianTrajectoryActionResult.js');
let FollowCartesianTrajectoryActionGoal = require('./FollowCartesianTrajectoryActionGoal.js');

module.exports = {
  KortexError: KortexError,
  ApiOptions: ApiOptions,
  ErrorCodes: ErrorCodes,
  SubErrorCodes: SubErrorCodes,
  SafetyIdentifierBankA: SafetyIdentifierBankA,
  EncoderDerivativeParameters: EncoderDerivativeParameters,
  ControlLoopParameters: ControlLoopParameters,
  CommandMode: CommandMode,
  ControlLoop: ControlLoop,
  StepResponse: StepResponse,
  Servoing: Servoing,
  CoggingFeedforwardMode: CoggingFeedforwardMode,
  AxisOffsets: AxisOffsets,
  CustomDataSelection: CustomDataSelection,
  CoggingFeedforwardModeInformation: CoggingFeedforwardModeInformation,
  TorqueOffset: TorqueOffset,
  FrequencyResponse: FrequencyResponse,
  LoopSelection: LoopSelection,
  PositionCommand: PositionCommand,
  CustomDataIndex: CustomDataIndex,
  CommandModeInformation: CommandModeInformation,
  VectorDriveParameters: VectorDriveParameters,
  ActuatorConfig_ServiceVersion: ActuatorConfig_ServiceVersion,
  ActuatorConfig_ControlModeInformation: ActuatorConfig_ControlModeInformation,
  ActuatorConfig_SafetyLimitType: ActuatorConfig_SafetyLimitType,
  TorqueCalibration: TorqueCalibration,
  ActuatorConfig_ControlMode: ActuatorConfig_ControlMode,
  ControlLoopSelection: ControlLoopSelection,
  RampResponse: RampResponse,
  AxisPosition: AxisPosition,
  CommandFlags: CommandFlags,
  ActuatorCyclic_ServiceVersion: ActuatorCyclic_ServiceVersion,
  ActuatorCyclic_MessageId: ActuatorCyclic_MessageId,
  ActuatorCyclic_Command: ActuatorCyclic_Command,
  ActuatorCyclic_CustomData: ActuatorCyclic_CustomData,
  ActuatorCyclic_Feedback: ActuatorCyclic_Feedback,
  StatusFlags: StatusFlags,
  TransformationRow: TransformationRow,
  ControllerElementState: ControllerElementState,
  ConstrainedOrientation: ConstrainedOrientation,
  ControllerNotification_state: ControllerNotification_state,
  TrajectoryInfo: TrajectoryInfo,
  FullIPv4Configuration: FullIPv4Configuration,
  WrenchCommand: WrenchCommand,
  LedState: LedState,
  CommunicationInterfaceConfiguration: CommunicationInterfaceConfiguration,
  ProtectionZoneList: ProtectionZoneList,
  RFConfiguration: RFConfiguration,
  ActivateMapHandle: ActivateMapHandle,
  ZoneShape: ZoneShape,
  MapElement: MapElement,
  SequenceTasks: SequenceTasks,
  TrajectoryErrorType: TrajectoryErrorType,
  CartesianSpeed: CartesianSpeed,
  Base_CapSenseConfig: Base_CapSenseConfig,
  ControllerType: ControllerType,
  MappingHandle: MappingHandle,
  MapGroupList: MapGroupList,
  ProtectionZoneHandle: ProtectionZoneHandle,
  ControllerState: ControllerState,
  MapEvent: MapEvent,
  SignalQuality: SignalQuality,
  MapEvent_events: MapEvent_events,
  Xbox360AnalogInputIdentifier: Xbox360AnalogInputIdentifier,
  Timeout: Timeout,
  SequenceTasksRange: SequenceTasksRange,
  ConstrainedJointAngles: ConstrainedJointAngles,
  FirmwareBundleVersions: FirmwareBundleVersions,
  ServoingModeInformation: ServoingModeInformation,
  NetworkNotification: NetworkNotification,
  SequenceList: SequenceList,
  TwistCommand: TwistCommand,
  GpioCommand: GpioCommand,
  Waypoint_type_of_waypoint: Waypoint_type_of_waypoint,
  Base_ControlModeInformation: Base_ControlModeInformation,
  ActionEvent: ActionEvent,
  JointTrajectoryConstraintType: JointTrajectoryConstraintType,
  Snapshot: Snapshot,
  Waypoint: Waypoint,
  CartesianLimitation: CartesianLimitation,
  ConfigurationChangeNotification_configuration_change: ConfigurationChangeNotification_configuration_change,
  ProtectionZoneNotification: ProtectionZoneNotification,
  Base_ServiceVersion: Base_ServiceVersion,
  CartesianWaypoint: CartesianWaypoint,
  RobotEventNotificationList: RobotEventNotificationList,
  Xbox360DigitalInputIdentifier: Xbox360DigitalInputIdentifier,
  Action: Action,
  Gen3GpioPinId: Gen3GpioPinId,
  WrenchMode: WrenchMode,
  Base_ControlMode: Base_ControlMode,
  FactoryNotification: FactoryNotification,
  JointAngles: JointAngles,
  ActionNotification: ActionNotification,
  JointAngle: JointAngle,
  SystemTime: SystemTime,
  TrajectoryErrorElement: TrajectoryErrorElement,
  NetworkType: NetworkType,
  TrajectoryErrorIdentifier: TrajectoryErrorIdentifier,
  WrenchLimitation: WrenchLimitation,
  UserList: UserList,
  ChangeTwist: ChangeTwist,
  EmergencyStop: EmergencyStop,
  ControllerConfiguration: ControllerConfiguration,
  BridgeStatus: BridgeStatus,
  ProtectionZoneNotificationList: ProtectionZoneNotificationList,
  SoundType: SoundType,
  MapGroupHandle: MapGroupHandle,
  BridgeResult: BridgeResult,
  WifiEnableState: WifiEnableState,
  GripperRequest: GripperRequest,
  SequenceInfoNotificationList: SequenceInfoNotificationList,
  AppendActionInformation: AppendActionInformation,
  ControlModeNotificationList: ControlModeNotificationList,
  FullUserProfile: FullUserProfile,
  OperatingMode: OperatingMode,
  ControllerHandle: ControllerHandle,
  PasswordChange: PasswordChange,
  IPv4Configuration: IPv4Configuration,
  SequenceTaskConfiguration: SequenceTaskConfiguration,
  ActionHandle: ActionHandle,
  BridgeList: BridgeList,
  SafetyEvent: SafetyEvent,
  Base_SafetyIdentifier: Base_SafetyIdentifier,
  TwistLimitation: TwistLimitation,
  Point: Point,
  AngularWaypoint: AngularWaypoint,
  MapGroup: MapGroup,
  FactoryEvent: FactoryEvent,
  GpioConfigurationList: GpioConfigurationList,
  TransformationMatrix: TransformationMatrix,
  CartesianLimitationList: CartesianLimitationList,
  ControllerConfigurationMode: ControllerConfigurationMode,
  Twist: Twist,
  WifiSecurityType: WifiSecurityType,
  SequenceTasksPair: SequenceTasksPair,
  MappingInfoNotification: MappingInfoNotification,
  Query: Query,
  Delay: Delay,
  JointsLimitationsList: JointsLimitationsList,
  UserNotificationList: UserNotificationList,
  ProtectionZoneEvent: ProtectionZoneEvent,
  MapList: MapList,
  MapHandle: MapHandle,
  GripperCommand: GripperCommand,
  KinematicTrajectoryConstraints: KinematicTrajectoryConstraints,
  Orientation: Orientation,
  ActionNotificationList: ActionNotificationList,
  SafetyNotificationList: SafetyNotificationList,
  Base_Position: Base_Position,
  ControllerEvent: ControllerEvent,
  ChangeJointSpeeds: ChangeJointSpeeds,
  ControllerEventType: ControllerEventType,
  ConstrainedPosition: ConstrainedPosition,
  ShapeType: ShapeType,
  UserProfileList: UserProfileList,
  Gripper: Gripper,
  RobotEventNotification: RobotEventNotification,
  WifiConfiguration: WifiConfiguration,
  OperatingModeInformation: OperatingModeInformation,
  GpioBehavior: GpioBehavior,
  JointTorque: JointTorque,
  RobotEvent: RobotEvent,
  SequenceTasksConfiguration: SequenceTasksConfiguration,
  OperatingModeNotificationList: OperatingModeNotificationList,
  ConfigurationChangeNotificationList: ConfigurationChangeNotificationList,
  Action_action_parameters: Action_action_parameters,
  TrajectoryInfoType: TrajectoryInfoType,
  ControllerElementHandle_identifier: ControllerElementHandle_identifier,
  CartesianTrajectoryConstraint_type: CartesianTrajectoryConstraint_type,
  SequenceTask: SequenceTask,
  ArmStateNotification: ArmStateNotification,
  PreComputedJointTrajectoryElement: PreComputedJointTrajectoryElement,
  ActuatorInformation: ActuatorInformation,
  Ssid: Ssid,
  ConstrainedPose: ConstrainedPose,
  NetworkNotificationList: NetworkNotificationList,
  WristDigitalInputIdentifier: WristDigitalInputIdentifier,
  MappingList: MappingList,
  BridgeConfig: BridgeConfig,
  IPv4Information: IPv4Information,
  JointNavigationDirection: JointNavigationDirection,
  UserEvent: UserEvent,
  Base_RotationMatrix: Base_RotationMatrix,
  UserNotification: UserNotification,
  ControllerList: ControllerList,
  SequenceInformation: SequenceInformation,
  TrajectoryContinuityMode: TrajectoryContinuityMode,
  ChangeWrench: ChangeWrench,
  Admittance: Admittance,
  ControllerNotificationList: ControllerNotificationList,
  JointTorques: JointTorques,
  MappingInfoNotificationList: MappingInfoNotificationList,
  BackupEvent: BackupEvent,
  WaypointList: WaypointList,
  SequenceInfoNotification: SequenceInfoNotification,
  BluetoothEnableState: BluetoothEnableState,
  GpioAction: GpioAction,
  BridgeType: BridgeType,
  RequestedActionType: RequestedActionType,
  SequenceTaskHandle: SequenceTaskHandle,
  ConfigurationNotificationEvent: ConfigurationNotificationEvent,
  OperatingModeNotification: OperatingModeNotification,
  SnapshotType: SnapshotType,
  CartesianTrajectoryConstraint: CartesianTrajectoryConstraint,
  ActionList: ActionList,
  WifiInformation: WifiInformation,
  ArmStateInformation: ArmStateInformation,
  ControllerElementEventType: ControllerElementEventType,
  ControllerConfigurationList: ControllerConfigurationList,
  BridgePortConfig: BridgePortConfig,
  Mapping: Mapping,
  ServoingModeNotification: ServoingModeNotification,
  NavigationDirection: NavigationDirection,
  Map: Map,
  WifiInformationList: WifiInformationList,
  ControllerBehavior: ControllerBehavior,
  AdmittanceMode: AdmittanceMode,
  IKData: IKData,
  BridgeIdentifier: BridgeIdentifier,
  WifiEncryptionType: WifiEncryptionType,
  Pose: Pose,
  Faults: Faults,
  Base_Stop: Base_Stop,
  Sequence: Sequence,
  ConstrainedJointAngle: ConstrainedJointAngle,
  JointSpeed: JointSpeed,
  Base_GpioConfiguration: Base_GpioConfiguration,
  SequenceHandle: SequenceHandle,
  AdvancedSequenceHandle: AdvancedSequenceHandle,
  PreComputedJointTrajectory: PreComputedJointTrajectory,
  JointLimitation: JointLimitation,
  EventIdSequenceInfoNotification: EventIdSequenceInfoNotification,
  GpioEvent: GpioEvent,
  ProtectionZone: ProtectionZone,
  ServoingMode: ServoingMode,
  ActionExecutionState: ActionExecutionState,
  WifiConfigurationList: WifiConfigurationList,
  LimitationType: LimitationType,
  NetworkEvent: NetworkEvent,
  ControllerNotification: ControllerNotification,
  ControllerElementHandle: ControllerElementHandle,
  FirmwareComponentVersion: FirmwareComponentVersion,
  Base_ControlModeNotification: Base_ControlModeNotification,
  Base_JointSpeeds: Base_JointSpeeds,
  Base_CapSenseMode: Base_CapSenseMode,
  ConfigurationChangeNotification: ConfigurationChangeNotification,
  Wrench: Wrench,
  ControllerInputType: ControllerInputType,
  JointTrajectoryConstraint: JointTrajectoryConstraint,
  NetworkHandle: NetworkHandle,
  TrajectoryErrorReport: TrajectoryErrorReport,
  GripperMode: GripperMode,
  Base_RotationMatrixRow: Base_RotationMatrixRow,
  SwitchControlMapping: SwitchControlMapping,
  ServoingModeNotificationList: ServoingModeNotificationList,
  ProtectionZoneInformation: ProtectionZoneInformation,
  ActionType: ActionType,
  Finger: Finger,
  GpioPinConfiguration: GpioPinConfiguration,
  WaypointValidationReport: WaypointValidationReport,
  GpioPinPropertyFlags: GpioPinPropertyFlags,
  UserProfile: UserProfile,
  BaseFeedback: BaseFeedback,
  BaseCyclic_Feedback: BaseCyclic_Feedback,
  BaseCyclic_Command: BaseCyclic_Command,
  BaseCyclic_ServiceVersion: BaseCyclic_ServiceVersion,
  BaseCyclic_CustomData: BaseCyclic_CustomData,
  ActuatorFeedback: ActuatorFeedback,
  ActuatorCustomData: ActuatorCustomData,
  ActuatorCommand: ActuatorCommand,
  DeviceTypes: DeviceTypes,
  Permission: Permission,
  NotificationHandle: NotificationHandle,
  UserProfileHandle: UserProfileHandle,
  UARTParity: UARTParity,
  CartesianReferenceFrame: CartesianReferenceFrame,
  NotificationOptions: NotificationOptions,
  SafetyStatusValue: SafetyStatusValue,
  ArmState: ArmState,
  CountryCode: CountryCode,
  Empty: Empty,
  SafetyNotification: SafetyNotification,
  SafetyHandle: SafetyHandle,
  UARTStopBits: UARTStopBits,
  Unit: Unit,
  DeviceHandle: DeviceHandle,
  NotificationType: NotificationType,
  UARTSpeed: UARTSpeed,
  UARTDeviceIdentification: UARTDeviceIdentification,
  Timestamp: Timestamp,
  UARTWordLength: UARTWordLength,
  CountryCodeIdentifier: CountryCodeIdentifier,
  UARTConfiguration: UARTConfiguration,
  Connection: Connection,
  ControlConfig_ControlModeNotification: ControlConfig_ControlModeNotification,
  CartesianReferenceFrameInfo: CartesianReferenceFrameInfo,
  ControlConfigurationEvent: ControlConfigurationEvent,
  JointSpeedSoftLimits: JointSpeedSoftLimits,
  PayloadInformation: PayloadInformation,
  ToolConfiguration: ToolConfiguration,
  TwistAngularSoftLimit: TwistAngularSoftLimit,
  ControlConfigurationNotification: ControlConfigurationNotification,
  JointAccelerationSoftLimits: JointAccelerationSoftLimits,
  ControlConfig_ControlModeInformation: ControlConfig_ControlModeInformation,
  ControlConfig_ControlMode: ControlConfig_ControlMode,
  LinearTwist: LinearTwist,
  CartesianTransform: CartesianTransform,
  AngularTwist: AngularTwist,
  GravityVector: GravityVector,
  TwistLinearSoftLimit: TwistLinearSoftLimit,
  ControlConfig_ServiceVersion: ControlConfig_ServiceVersion,
  DesiredSpeeds: DesiredSpeeds,
  KinematicLimitsList: KinematicLimitsList,
  KinematicLimits: KinematicLimits,
  ControlConfig_JointSpeeds: ControlConfig_JointSpeeds,
  ControlConfig_Position: ControlConfig_Position,
  ModelNumber: ModelNumber,
  SerialNumber: SerialNumber,
  RunMode: RunMode,
  PartNumberRevision: PartNumberRevision,
  SafetyInformationList: SafetyInformationList,
  IPv4Settings: IPv4Settings,
  DeviceConfig_CapSenseConfig: DeviceConfig_CapSenseConfig,
  SafetyInformation: SafetyInformation,
  SafetyStatus: SafetyStatus,
  RunModes: RunModes,
  CalibrationItem: CalibrationItem,
  PowerOnSelfTestResult: PowerOnSelfTestResult,
  BootloaderVersion: BootloaderVersion,
  SafetyConfiguration: SafetyConfiguration,
  CalibrationStatus: CalibrationStatus,
  DeviceConfig_ServiceVersion: DeviceConfig_ServiceVersion,
  CalibrationParameter_value: CalibrationParameter_value,
  CalibrationParameter: CalibrationParameter,
  DeviceConfig_CapSenseMode: DeviceConfig_CapSenseMode,
  DeviceConfig_SafetyLimitType: DeviceConfig_SafetyLimitType,
  SafetyThreshold: SafetyThreshold,
  CalibrationElement: CalibrationElement,
  SafetyConfigurationList: SafetyConfigurationList,
  DeviceType: DeviceType,
  Calibration: Calibration,
  CapSenseRegister: CapSenseRegister,
  RebootRqst: RebootRqst,
  PartNumber: PartNumber,
  FirmwareVersion: FirmwareVersion,
  SafetyEnable: SafetyEnable,
  MACAddress: MACAddress,
  CalibrationResult: CalibrationResult,
  DeviceHandles: DeviceHandles,
  DeviceManager_ServiceVersion: DeviceManager_ServiceVersion,
  GripperConfig_SafetyIdentifier: GripperConfig_SafetyIdentifier,
  RobotiqGripperStatusFlags: RobotiqGripperStatusFlags,
  MotorFeedback: MotorFeedback,
  GripperCyclic_ServiceVersion: GripperCyclic_ServiceVersion,
  CustomDataUnit: CustomDataUnit,
  GripperCyclic_Feedback: GripperCyclic_Feedback,
  GripperCyclic_MessageId: GripperCyclic_MessageId,
  GripperCyclic_Command: GripperCyclic_Command,
  MotorCommand: MotorCommand,
  GripperCyclic_CustomData: GripperCyclic_CustomData,
  GPIOValue: GPIOValue,
  I2CDevice: I2CDevice,
  I2CReadParameter: I2CReadParameter,
  EthernetDeviceIdentification: EthernetDeviceIdentification,
  EthernetDuplex: EthernetDuplex,
  UARTPortId: UARTPortId,
  GPIOMode: GPIOMode,
  I2CDeviceIdentification: I2CDeviceIdentification,
  GPIOIdentifier: GPIOIdentifier,
  GPIOIdentification: GPIOIdentification,
  InterconnectConfig_SafetyIdentifier: InterconnectConfig_SafetyIdentifier,
  I2CWriteRegisterParameter: I2CWriteRegisterParameter,
  EthernetConfiguration: EthernetConfiguration,
  I2CMode: I2CMode,
  I2CData: I2CData,
  GPIOState: GPIOState,
  I2CWriteParameter: I2CWriteParameter,
  InterconnectConfig_ServiceVersion: InterconnectConfig_ServiceVersion,
  GPIOPull: GPIOPull,
  I2CReadRegisterParameter: I2CReadRegisterParameter,
  I2CDeviceAddressing: I2CDeviceAddressing,
  I2CRegisterAddressSize: I2CRegisterAddressSize,
  EthernetDevice: EthernetDevice,
  InterconnectConfig_GPIOConfiguration: InterconnectConfig_GPIOConfiguration,
  EthernetSpeed: EthernetSpeed,
  I2CConfiguration: I2CConfiguration,
  InterconnectCyclic_Command_tool_command: InterconnectCyclic_Command_tool_command,
  InterconnectCyclic_Feedback: InterconnectCyclic_Feedback,
  InterconnectCyclic_MessageId: InterconnectCyclic_MessageId,
  InterconnectCyclic_Command: InterconnectCyclic_Command,
  InterconnectCyclic_ServiceVersion: InterconnectCyclic_ServiceVersion,
  InterconnectCyclic_Feedback_tool_feedback: InterconnectCyclic_Feedback_tool_feedback,
  InterconnectCyclic_CustomData: InterconnectCyclic_CustomData,
  InterconnectCyclic_CustomData_tool_customData: InterconnectCyclic_CustomData_tool_customData,
  VisionModuleType: VisionModuleType,
  BrakeType: BrakeType,
  ModelId: ModelId,
  BaseType: BaseType,
  WristType: WristType,
  InterfaceModuleType: InterfaceModuleType,
  EndEffectorType: EndEffectorType,
  ArmLaterality: ArmLaterality,
  ProductConfigurationEndEffectorType: ProductConfigurationEndEffectorType,
  CompleteProductConfiguration: CompleteProductConfiguration,
  VisionConfig_ServiceVersion: VisionConfig_ServiceVersion,
  VisionConfig_RotationMatrixRow: VisionConfig_RotationMatrixRow,
  DistortionCoefficients: DistortionCoefficients,
  ManualFocus: ManualFocus,
  Sensor: Sensor,
  OptionInformation: OptionInformation,
  ExtrinsicParameters: ExtrinsicParameters,
  FocusPoint: FocusPoint,
  IntrinsicParameters: IntrinsicParameters,
  FocusAction: FocusAction,
  BitRate: BitRate,
  TranslationVector: TranslationVector,
  OptionIdentifier: OptionIdentifier,
  Resolution: Resolution,
  Option: Option,
  SensorIdentifier: SensorIdentifier,
  SensorFocusAction: SensorFocusAction,
  FrameRate: FrameRate,
  IntrinsicProfileIdentifier: IntrinsicProfileIdentifier,
  OptionValue: OptionValue,
  VisionNotification: VisionNotification,
  VisionEvent: VisionEvent,
  VisionConfig_RotationMatrix: VisionConfig_RotationMatrix,
  SensorFocusAction_action_parameters: SensorFocusAction_action_parameters,
  SensorSettings: SensorSettings,
  FollowCartesianTrajectoryGoal: FollowCartesianTrajectoryGoal,
  FollowCartesianTrajectoryResult: FollowCartesianTrajectoryResult,
  FollowCartesianTrajectoryActionFeedback: FollowCartesianTrajectoryActionFeedback,
  FollowCartesianTrajectoryFeedback: FollowCartesianTrajectoryFeedback,
  FollowCartesianTrajectoryAction: FollowCartesianTrajectoryAction,
  FollowCartesianTrajectoryActionResult: FollowCartesianTrajectoryActionResult,
  FollowCartesianTrajectoryActionGoal: FollowCartesianTrajectoryActionGoal,
};
