// Generated by gencpp from file kortex_driver/ErrorCodes.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_ERRORCODES_H
#define KORTEX_DRIVER_MESSAGE_ERRORCODES_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace kortex_driver
{
template <class ContainerAllocator>
struct ErrorCodes_
{
  typedef ErrorCodes_<ContainerAllocator> Type;

  ErrorCodes_()
    {
    }
  ErrorCodes_(const ContainerAllocator& _alloc)
    {
  (void)_alloc;
    }





// reducing the odds to have name collisions with Windows.h 
#if defined(_WIN32) && defined(ERROR_NONE)
  #undef ERROR_NONE
#endif
#if defined(_WIN32) && defined(ERROR_PROTOCOL_SERVER)
  #undef ERROR_PROTOCOL_SERVER
#endif
#if defined(_WIN32) && defined(ERROR_PROTOCOL_CLIENT)
  #undef ERROR_PROTOCOL_CLIENT
#endif
#if defined(_WIN32) && defined(ERROR_DEVICE)
  #undef ERROR_DEVICE
#endif
#if defined(_WIN32) && defined(ERROR_INTERNAL)
  #undef ERROR_INTERNAL
#endif

  enum {
    ERROR_NONE = 0u,
    ERROR_PROTOCOL_SERVER = 1u,
    ERROR_PROTOCOL_CLIENT = 2u,
    ERROR_DEVICE = 3u,
    ERROR_INTERNAL = 4u,
  };


  typedef boost::shared_ptr< ::kortex_driver::ErrorCodes_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::ErrorCodes_<ContainerAllocator> const> ConstPtr;

}; // struct ErrorCodes_

typedef ::kortex_driver::ErrorCodes_<std::allocator<void> > ErrorCodes;

typedef boost::shared_ptr< ::kortex_driver::ErrorCodes > ErrorCodesPtr;
typedef boost::shared_ptr< ::kortex_driver::ErrorCodes const> ErrorCodesConstPtr;

// constants requiring out of line definition

   

   

   

   

   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::ErrorCodes_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::ErrorCodes_<ContainerAllocator> >::stream(s, "", v);
return s;
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::ErrorCodes_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::ErrorCodes_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::ErrorCodes_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
{
  static const char* value()
  {
    return "cb78b6e4994aaf216b83b68ecaa14cbd";
  }

  static const char* value(const ::kortex_driver::ErrorCodes_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xcb78b6e4994aaf21ULL;
  static const uint64_t static_value2 = 0x6b83b68ecaa14cbdULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/ErrorCodes";
  }

  static const char* value(const ::kortex_driver::ErrorCodes_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n"
"uint32 ERROR_NONE = 0\n"
"\n"
"uint32 ERROR_PROTOCOL_SERVER = 1\n"
"\n"
"uint32 ERROR_PROTOCOL_CLIENT = 2\n"
"\n"
"uint32 ERROR_DEVICE = 3\n"
"\n"
"uint32 ERROR_INTERNAL = 4\n"
;
  }

  static const char* value(const ::kortex_driver::ErrorCodes_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream&, T)
    {}

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct ErrorCodes_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::ErrorCodes_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream&, const std::string&, const ::kortex_driver::ErrorCodes_<ContainerAllocator>&)
  {}
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_ERRORCODES_H