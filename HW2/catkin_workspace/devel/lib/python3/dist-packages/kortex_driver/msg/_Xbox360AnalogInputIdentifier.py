# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from kortex_driver/Xbox360AnalogInputIdentifier.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct


class Xbox360AnalogInputIdentifier(genpy.Message):
  _md5sum = "bdf16a9285171f4643549a6ec207283d"
  _type = "kortex_driver/Xbox360AnalogInputIdentifier"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """
uint32 UNSPECIFIED_XBOX360_ANALOG = 0

uint32 XBOX360_THUMB_LEFT_X = 1

uint32 XBOX360_THUMB_LEFT_Y = 2

uint32 XBOX360_THUMB_RIGHT_X = 3

uint32 XBOX360_THUMB_RIGHT_Y = 4

uint32 XBOX360_TRIGGER_LEFT = 5

uint32 XBOX360_TRIGGER_RIGHT = 6
"""
  # Pseudo-constants
  UNSPECIFIED_XBOX360_ANALOG = 0
  XBOX360_THUMB_LEFT_X = 1
  XBOX360_THUMB_LEFT_Y = 2
  XBOX360_THUMB_RIGHT_X = 3
  XBOX360_THUMB_RIGHT_Y = 4
  XBOX360_TRIGGER_LEFT = 5
  XBOX360_TRIGGER_RIGHT = 6

  __slots__ = []
  _slot_types = []

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(Xbox360AnalogInputIdentifier, self).__init__(*args, **kwds)

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
      pass
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
      end = 0
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
      pass
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
      end = 0
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I