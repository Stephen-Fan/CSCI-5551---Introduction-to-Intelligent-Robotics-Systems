# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/JointsLimitationsList.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import kortex_driver.msg

class JointsLimitationsList(genpy.Message):
  _md5sum = "6dfe2c39e44634a2eba8f7879d518184"
  _type = "kortex_driver/JointsLimitationsList"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """
JointLimitation[] joints_limitations
================================================================================
MSG: kortex_driver/JointLimitation

uint32 joint_identifier
uint32 type
float32 value"""
  __slots__ = ['joints_limitations']
  _slot_types = ['kortex_driver/JointLimitation[]']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       joints_limitations

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(JointsLimitationsList, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.joints_limitations is None:
        self.joints_limitations = []
    else:
      self.joints_limitations = []

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
      length = len(self.joints_limitations)
      buff.write(_struct_I.pack(length))
      for val1 in self.joints_limitations:
        _x = val1
        buff.write(_get_struct_2If().pack(_x.joint_identifier, _x.type, _x.value))
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
      if self.joints_limitations is None:
        self.joints_limitations = None
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.joints_limitations = []
      for i in range(0, length):
        val1 = kortex_driver.msg.JointLimitation()
        _x = val1
        start = end
        end += 12
        (_x.joint_identifier, _x.type, _x.value,) = _get_struct_2If().unpack(str[start:end])
        self.joints_limitations.append(val1)
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
      length = len(self.joints_limitations)
      buff.write(_struct_I.pack(length))
      for val1 in self.joints_limitations:
        _x = val1
        buff.write(_get_struct_2If().pack(_x.joint_identifier, _x.type, _x.value))
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
      if self.joints_limitations is None:
        self.joints_limitations = None
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.joints_limitations = []
      for i in range(0, length):
        val1 = kortex_driver.msg.JointLimitation()
        _x = val1
        start = end
        end += 12
        (_x.joint_identifier, _x.type, _x.value,) = _get_struct_2If().unpack(str[start:end])
        self.joints_limitations.append(val1)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_2If = None
def _get_struct_2If():
    global _struct_2If
    if _struct_2If is None:
        _struct_2If = struct.Struct("<2If")
    return _struct_2If