# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/BaseCyclic_Feedback.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class BaseCyclic_Feedback(genpy.Message):
  _md5sum = "5f56809f61aebc2804399d7366b38f65"
  _type = "kortex_driver/BaseCyclic_Feedback"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """
uint32 frame_id
BaseFeedback base
ActuatorFeedback[] actuators
InterconnectCyclic_Feedback interconnect
================================================================================
MSG: kortex_driver/BaseFeedback

uint32 active_state_connection_identifier
uint32 active_state
float32 arm_voltage
float32 arm_current
float32 temperature_cpu
float32 temperature_ambient
float32 imu_acceleration_x
float32 imu_acceleration_y
float32 imu_acceleration_z
float32 imu_angular_velocity_x
float32 imu_angular_velocity_y
float32 imu_angular_velocity_z
float32 tool_pose_x
float32 tool_pose_y
float32 tool_pose_z
float32 tool_pose_theta_x
float32 tool_pose_theta_y
float32 tool_pose_theta_z
float32 tool_twist_linear_x
float32 tool_twist_linear_y
float32 tool_twist_linear_z
float32 tool_twist_angular_x
float32 tool_twist_angular_y
float32 tool_twist_angular_z
float32 tool_external_wrench_force_x
float32 tool_external_wrench_force_y
float32 tool_external_wrench_force_z
float32 tool_external_wrench_torque_x
float32 tool_external_wrench_torque_y
float32 tool_external_wrench_torque_z
uint32 fault_bank_a
uint32 fault_bank_b
uint32 warning_bank_a
uint32 warning_bank_b
float32 commanded_tool_pose_x
float32 commanded_tool_pose_y
float32 commanded_tool_pose_z
float32 commanded_tool_pose_theta_x
float32 commanded_tool_pose_theta_y
float32 commanded_tool_pose_theta_z
================================================================================
MSG: kortex_driver/ActuatorFeedback

uint32 command_id
uint32 status_flags
uint32 jitter_comm
float32 position
float32 velocity
float32 torque
float32 current_motor
float32 voltage
float32 temperature_motor
float32 temperature_core
uint32 fault_bank_a
uint32 fault_bank_b
uint32 warning_bank_a
uint32 warning_bank_b
================================================================================
MSG: kortex_driver/InterconnectCyclic_Feedback

InterconnectCyclic_MessageId feedback_id
uint32 status_flags
uint32 jitter_comm
float32 imu_acceleration_x
float32 imu_acceleration_y
float32 imu_acceleration_z
float32 imu_angular_velocity_x
float32 imu_angular_velocity_y
float32 imu_angular_velocity_z
float32 voltage
float32 temperature_core
uint32 fault_bank_a
uint32 fault_bank_b
uint32 warning_bank_a
uint32 warning_bank_b
InterconnectCyclic_Feedback_tool_feedback oneof_tool_feedback
================================================================================
MSG: kortex_driver/InterconnectCyclic_MessageId

uint32 identifier
================================================================================
MSG: kortex_driver/InterconnectCyclic_Feedback_tool_feedback

GripperCyclic_Feedback[] gripper_feedback
================================================================================
MSG: kortex_driver/GripperCyclic_Feedback

GripperCyclic_MessageId feedback_id
uint32 status_flags
uint32 fault_bank_a
uint32 fault_bank_b
uint32 warning_bank_a
uint32 warning_bank_b
MotorFeedback[] motor
================================================================================
MSG: kortex_driver/GripperCyclic_MessageId

uint32 identifier
================================================================================
MSG: kortex_driver/MotorFeedback

uint32 motor_id
float32 position
float32 velocity
float32 current_motor
float32 voltage
float32 temperature_motor"""
  __slots__ = ['frame_id','base','actuators','interconnect']
  _slot_types = ['uint32','kortex_driver/BaseFeedback','kortex_driver/ActuatorFeedback[]','kortex_driver/InterconnectCyclic_Feedback']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       frame_id,base,actuators,interconnect

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(BaseCyclic_Feedback, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.frame_id is None:
        self.frame_id = 0
      if self.base is None:
        self.base = kortex_driver.msg.BaseFeedback()
      if self.actuators is None:
        self.actuators = []
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Feedback()
    else:
      self.frame_id = 0
      self.base = kortex_driver.msg.BaseFeedback()
      self.actuators = []
      self.interconnect = kortex_driver.msg.InterconnectCyclic_Feedback()

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_3I28f4I6f().pack(_x.frame_id, _x.base.active_state_connection_identifier, _x.base.active_state, _x.base.arm_voltage, _x.base.arm_current, _x.base.temperature_cpu, _x.base.temperature_ambient, _x.base.imu_acceleration_x, _x.base.imu_acceleration_y, _x.base.imu_acceleration_z, _x.base.imu_angular_velocity_x, _x.base.imu_angular_velocity_y, _x.base.imu_angular_velocity_z, _x.base.tool_pose_x, _x.base.tool_pose_y, _x.base.tool_pose_z, _x.base.tool_pose_theta_x, _x.base.tool_pose_theta_y, _x.base.tool_pose_theta_z, _x.base.tool_twist_linear_x, _x.base.tool_twist_linear_y, _x.base.tool_twist_linear_z, _x.base.tool_twist_angular_x, _x.base.tool_twist_angular_y, _x.base.tool_twist_angular_z, _x.base.tool_external_wrench_force_x, _x.base.tool_external_wrench_force_y, _x.base.tool_external_wrench_force_z, _x.base.tool_external_wrench_torque_x, _x.base.tool_external_wrench_torque_y, _x.base.tool_external_wrench_torque_z, _x.base.fault_bank_a, _x.base.fault_bank_b, _x.base.warning_bank_a, _x.base.warning_bank_b, _x.base.commanded_tool_pose_x, _x.base.commanded_tool_pose_y, _x.base.commanded_tool_pose_z, _x.base.commanded_tool_pose_theta_x, _x.base.commanded_tool_pose_theta_y, _x.base.commanded_tool_pose_theta_z))
      length = len(self.actuators)
      buff.write(_struct_I.pack(length))
      for val1 in self.actuators:
        _x = val1
        buff.write(_get_struct_3I7f4I().pack(_x.command_id, _x.status_flags, _x.jitter_comm, _x.position, _x.velocity, _x.torque, _x.current_motor, _x.voltage, _x.temperature_motor, _x.temperature_core, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b))
      _x = self
      buff.write(_get_struct_3I8f4I().pack(_x.interconnect.feedback_id.identifier, _x.interconnect.status_flags, _x.interconnect.jitter_comm, _x.interconnect.imu_acceleration_x, _x.interconnect.imu_acceleration_y, _x.interconnect.imu_acceleration_z, _x.interconnect.imu_angular_velocity_x, _x.interconnect.imu_angular_velocity_y, _x.interconnect.imu_angular_velocity_z, _x.interconnect.voltage, _x.interconnect.temperature_core, _x.interconnect.fault_bank_a, _x.interconnect.fault_bank_b, _x.interconnect.warning_bank_a, _x.interconnect.warning_bank_b))
      length = len(self.interconnect.oneof_tool_feedback.gripper_feedback)
      buff.write(_struct_I.pack(length))
      for val1 in self.interconnect.oneof_tool_feedback.gripper_feedback:
        _v1 = val1.feedback_id
        _x = _v1.identifier
        buff.write(_get_struct_I().pack(_x))
        _x = val1
        buff.write(_get_struct_5I().pack(_x.status_flags, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b))
        length = len(val1.motor)
        buff.write(_struct_I.pack(length))
        for val2 in val1.motor:
          _x = val2
          buff.write(_get_struct_I5f().pack(_x.motor_id, _x.position, _x.velocity, _x.current_motor, _x.voltage, _x.temperature_motor))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.base is None:
        self.base = kortex_driver.msg.BaseFeedback()
      if self.actuators is None:
        self.actuators = None
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Feedback()
      end = 0
      _x = self
      start = end
      end += 164
      (_x.frame_id, _x.base.active_state_connection_identifier, _x.base.active_state, _x.base.arm_voltage, _x.base.arm_current, _x.base.temperature_cpu, _x.base.temperature_ambient, _x.base.imu_acceleration_x, _x.base.imu_acceleration_y, _x.base.imu_acceleration_z, _x.base.imu_angular_velocity_x, _x.base.imu_angular_velocity_y, _x.base.imu_angular_velocity_z, _x.base.tool_pose_x, _x.base.tool_pose_y, _x.base.tool_pose_z, _x.base.tool_pose_theta_x, _x.base.tool_pose_theta_y, _x.base.tool_pose_theta_z, _x.base.tool_twist_linear_x, _x.base.tool_twist_linear_y, _x.base.tool_twist_linear_z, _x.base.tool_twist_angular_x, _x.base.tool_twist_angular_y, _x.base.tool_twist_angular_z, _x.base.tool_external_wrench_force_x, _x.base.tool_external_wrench_force_y, _x.base.tool_external_wrench_force_z, _x.base.tool_external_wrench_torque_x, _x.base.tool_external_wrench_torque_y, _x.base.tool_external_wrench_torque_z, _x.base.fault_bank_a, _x.base.fault_bank_b, _x.base.warning_bank_a, _x.base.warning_bank_b, _x.base.commanded_tool_pose_x, _x.base.commanded_tool_pose_y, _x.base.commanded_tool_pose_z, _x.base.commanded_tool_pose_theta_x, _x.base.commanded_tool_pose_theta_y, _x.base.commanded_tool_pose_theta_z,) = _get_struct_3I28f4I6f().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.actuators = []
      for i in range(0, length):
        val1 = kortex_driver.msg.ActuatorFeedback()
        _x = val1
        start = end
        end += 56
        (_x.command_id, _x.status_flags, _x.jitter_comm, _x.position, _x.velocity, _x.torque, _x.current_motor, _x.voltage, _x.temperature_motor, _x.temperature_core, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b,) = _get_struct_3I7f4I().unpack(str[start:end])
        self.actuators.append(val1)
      _x = self
      start = end
      end += 60
      (_x.interconnect.feedback_id.identifier, _x.interconnect.status_flags, _x.interconnect.jitter_comm, _x.interconnect.imu_acceleration_x, _x.interconnect.imu_acceleration_y, _x.interconnect.imu_acceleration_z, _x.interconnect.imu_angular_velocity_x, _x.interconnect.imu_angular_velocity_y, _x.interconnect.imu_angular_velocity_z, _x.interconnect.voltage, _x.interconnect.temperature_core, _x.interconnect.fault_bank_a, _x.interconnect.fault_bank_b, _x.interconnect.warning_bank_a, _x.interconnect.warning_bank_b,) = _get_struct_3I8f4I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.interconnect.oneof_tool_feedback.gripper_feedback = []
      for i in range(0, length):
        val1 = kortex_driver.msg.GripperCyclic_Feedback()
        _v2 = val1.feedback_id
        start = end
        end += 4
        (_v2.identifier,) = _get_struct_I().unpack(str[start:end])
        _x = val1
        start = end
        end += 20
        (_x.status_flags, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b,) = _get_struct_5I().unpack(str[start:end])
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        val1.motor = []
        for i in range(0, length):
          val2 = kortex_driver.msg.MotorFeedback()
          _x = val2
          start = end
          end += 24
          (_x.motor_id, _x.position, _x.velocity, _x.current_motor, _x.voltage, _x.temperature_motor,) = _get_struct_I5f().unpack(str[start:end])
          val1.motor.append(val2)
        self.interconnect.oneof_tool_feedback.gripper_feedback.append(val1)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_3I28f4I6f().pack(_x.frame_id, _x.base.active_state_connection_identifier, _x.base.active_state, _x.base.arm_voltage, _x.base.arm_current, _x.base.temperature_cpu, _x.base.temperature_ambient, _x.base.imu_acceleration_x, _x.base.imu_acceleration_y, _x.base.imu_acceleration_z, _x.base.imu_angular_velocity_x, _x.base.imu_angular_velocity_y, _x.base.imu_angular_velocity_z, _x.base.tool_pose_x, _x.base.tool_pose_y, _x.base.tool_pose_z, _x.base.tool_pose_theta_x, _x.base.tool_pose_theta_y, _x.base.tool_pose_theta_z, _x.base.tool_twist_linear_x, _x.base.tool_twist_linear_y, _x.base.tool_twist_linear_z, _x.base.tool_twist_angular_x, _x.base.tool_twist_angular_y, _x.base.tool_twist_angular_z, _x.base.tool_external_wrench_force_x, _x.base.tool_external_wrench_force_y, _x.base.tool_external_wrench_force_z, _x.base.tool_external_wrench_torque_x, _x.base.tool_external_wrench_torque_y, _x.base.tool_external_wrench_torque_z, _x.base.fault_bank_a, _x.base.fault_bank_b, _x.base.warning_bank_a, _x.base.warning_bank_b, _x.base.commanded_tool_pose_x, _x.base.commanded_tool_pose_y, _x.base.commanded_tool_pose_z, _x.base.commanded_tool_pose_theta_x, _x.base.commanded_tool_pose_theta_y, _x.base.commanded_tool_pose_theta_z))
      length = len(self.actuators)
      buff.write(_struct_I.pack(length))
      for val1 in self.actuators:
        _x = val1
        buff.write(_get_struct_3I7f4I().pack(_x.command_id, _x.status_flags, _x.jitter_comm, _x.position, _x.velocity, _x.torque, _x.current_motor, _x.voltage, _x.temperature_motor, _x.temperature_core, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b))
      _x = self
      buff.write(_get_struct_3I8f4I().pack(_x.interconnect.feedback_id.identifier, _x.interconnect.status_flags, _x.interconnect.jitter_comm, _x.interconnect.imu_acceleration_x, _x.interconnect.imu_acceleration_y, _x.interconnect.imu_acceleration_z, _x.interconnect.imu_angular_velocity_x, _x.interconnect.imu_angular_velocity_y, _x.interconnect.imu_angular_velocity_z, _x.interconnect.voltage, _x.interconnect.temperature_core, _x.interconnect.fault_bank_a, _x.interconnect.fault_bank_b, _x.interconnect.warning_bank_a, _x.interconnect.warning_bank_b))
      length = len(self.interconnect.oneof_tool_feedback.gripper_feedback)
      buff.write(_struct_I.pack(length))
      for val1 in self.interconnect.oneof_tool_feedback.gripper_feedback:
        _v3 = val1.feedback_id
        _x = _v3.identifier
        buff.write(_get_struct_I().pack(_x))
        _x = val1
        buff.write(_get_struct_5I().pack(_x.status_flags, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b))
        length = len(val1.motor)
        buff.write(_struct_I.pack(length))
        for val2 in val1.motor:
          _x = val2
          buff.write(_get_struct_I5f().pack(_x.motor_id, _x.position, _x.velocity, _x.current_motor, _x.voltage, _x.temperature_motor))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.base is None:
        self.base = kortex_driver.msg.BaseFeedback()
      if self.actuators is None:
        self.actuators = None
      if self.interconnect is None:
        self.interconnect = kortex_driver.msg.InterconnectCyclic_Feedback()
      end = 0
      _x = self
      start = end
      end += 164
      (_x.frame_id, _x.base.active_state_connection_identifier, _x.base.active_state, _x.base.arm_voltage, _x.base.arm_current, _x.base.temperature_cpu, _x.base.temperature_ambient, _x.base.imu_acceleration_x, _x.base.imu_acceleration_y, _x.base.imu_acceleration_z, _x.base.imu_angular_velocity_x, _x.base.imu_angular_velocity_y, _x.base.imu_angular_velocity_z, _x.base.tool_pose_x, _x.base.tool_pose_y, _x.base.tool_pose_z, _x.base.tool_pose_theta_x, _x.base.tool_pose_theta_y, _x.base.tool_pose_theta_z, _x.base.tool_twist_linear_x, _x.base.tool_twist_linear_y, _x.base.tool_twist_linear_z, _x.base.tool_twist_angular_x, _x.base.tool_twist_angular_y, _x.base.tool_twist_angular_z, _x.base.tool_external_wrench_force_x, _x.base.tool_external_wrench_force_y, _x.base.tool_external_wrench_force_z, _x.base.tool_external_wrench_torque_x, _x.base.tool_external_wrench_torque_y, _x.base.tool_external_wrench_torque_z, _x.base.fault_bank_a, _x.base.fault_bank_b, _x.base.warning_bank_a, _x.base.warning_bank_b, _x.base.commanded_tool_pose_x, _x.base.commanded_tool_pose_y, _x.base.commanded_tool_pose_z, _x.base.commanded_tool_pose_theta_x, _x.base.commanded_tool_pose_theta_y, _x.base.commanded_tool_pose_theta_z,) = _get_struct_3I28f4I6f().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.actuators = []
      for i in range(0, length):
        val1 = kortex_driver.msg.ActuatorFeedback()
        _x = val1
        start = end
        end += 56
        (_x.command_id, _x.status_flags, _x.jitter_comm, _x.position, _x.velocity, _x.torque, _x.current_motor, _x.voltage, _x.temperature_motor, _x.temperature_core, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b,) = _get_struct_3I7f4I().unpack(str[start:end])
        self.actuators.append(val1)
      _x = self
      start = end
      end += 60
      (_x.interconnect.feedback_id.identifier, _x.interconnect.status_flags, _x.interconnect.jitter_comm, _x.interconnect.imu_acceleration_x, _x.interconnect.imu_acceleration_y, _x.interconnect.imu_acceleration_z, _x.interconnect.imu_angular_velocity_x, _x.interconnect.imu_angular_velocity_y, _x.interconnect.imu_angular_velocity_z, _x.interconnect.voltage, _x.interconnect.temperature_core, _x.interconnect.fault_bank_a, _x.interconnect.fault_bank_b, _x.interconnect.warning_bank_a, _x.interconnect.warning_bank_b,) = _get_struct_3I8f4I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.interconnect.oneof_tool_feedback.gripper_feedback = []
      for i in range(0, length):
        val1 = kortex_driver.msg.GripperCyclic_Feedback()
        _v4 = val1.feedback_id
        start = end
        end += 4
        (_v4.identifier,) = _get_struct_I().unpack(str[start:end])
        _x = val1
        start = end
        end += 20
        (_x.status_flags, _x.fault_bank_a, _x.fault_bank_b, _x.warning_bank_a, _x.warning_bank_b,) = _get_struct_5I().unpack(str[start:end])
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        val1.motor = []
        for i in range(0, length):
          val2 = kortex_driver.msg.MotorFeedback()
          _x = val2
          start = end
          end += 24
          (_x.motor_id, _x.position, _x.velocity, _x.current_motor, _x.voltage, _x.temperature_motor,) = _get_struct_I5f().unpack(str[start:end])
          val1.motor.append(val2)
        self.interconnect.oneof_tool_feedback.gripper_feedback.append(val1)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_3I28f4I6f = None
def _get_struct_3I28f4I6f():
    global _struct_3I28f4I6f
    if _struct_3I28f4I6f is None:
        _struct_3I28f4I6f = struct.Struct("<3I28f4I6f")
    return _struct_3I28f4I6f
_struct_3I7f4I = None
def _get_struct_3I7f4I():
    global _struct_3I7f4I
    if _struct_3I7f4I is None:
        _struct_3I7f4I = struct.Struct("<3I7f4I")
    return _struct_3I7f4I
_struct_3I8f4I = None
def _get_struct_3I8f4I():
    global _struct_3I8f4I
    if _struct_3I8f4I is None:
        _struct_3I8f4I = struct.Struct("<3I8f4I")
    return _struct_3I8f4I
_struct_5I = None
def _get_struct_5I():
    global _struct_5I
    if _struct_5I is None:
        _struct_5I = struct.Struct("<5I")
    return _struct_5I
_struct_I5f = None
def _get_struct_I5f():
    global _struct_I5f
    if _struct_I5f is None:
        _struct_I5f = struct.Struct("<I5f")
    return _struct_I5f