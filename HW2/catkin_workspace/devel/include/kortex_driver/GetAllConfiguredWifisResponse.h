// Generated by gencpp from file kortex_driver/GetAllConfiguredWifisResponse.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETALLCONFIGUREDWIFISRESPONSE_H
#define KORTEX_DRIVER_MESSAGE_GETALLCONFIGUREDWIFISRESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <kortex_driver/WifiConfigurationList.h>

namespace kortex_driver
{
template <class ContainerAllocator>
struct GetAllConfiguredWifisResponse_
{
  typedef GetAllConfiguredWifisResponse_<ContainerAllocator> Type;

  GetAllConfiguredWifisResponse_()
    : output()  {
    }
  GetAllConfiguredWifisResponse_(const ContainerAllocator& _alloc)
    : output(_alloc)  {
  (void)_alloc;
    }



   typedef  ::kortex_driver::WifiConfigurationList_<ContainerAllocator>  _output_type;
  _output_type output;





  typedef boost::shared_ptr< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetAllConfiguredWifisResponse_

typedef ::kortex_driver::GetAllConfiguredWifisResponse_<std::allocator<void> > GetAllConfiguredWifisResponse;

typedef boost::shared_ptr< ::kortex_driver::GetAllConfiguredWifisResponse > GetAllConfiguredWifisResponsePtr;
typedef boost::shared_ptr< ::kortex_driver::GetAllConfiguredWifisResponse const> GetAllConfiguredWifisResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator2> & rhs)
{
  return lhs.output == rhs.output;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator1> & lhs, const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace kortex_driver

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "3008b2fabc6af5deeb24b1749ebe403a";
  }

  static const char* value(const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x3008b2fabc6af5deULL;
  static const uint64_t static_value2 = 0xeb24b1749ebe403aULL;
};

template<class ContainerAllocator>
struct DataType< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "kortex_driver/GetAllConfiguredWifisResponse";
  }

  static const char* value(const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "WifiConfigurationList output\n"
"\n"
"================================================================================\n"
"MSG: kortex_driver/WifiConfigurationList\n"
"\n"
"WifiConfiguration[] wifi_configuration_list\n"
"================================================================================\n"
"MSG: kortex_driver/WifiConfiguration\n"
"\n"
"Ssid ssid\n"
"string security_key\n"
"bool connect_automatically\n"
"================================================================================\n"
"MSG: kortex_driver/Ssid\n"
"\n"
"string identifier\n"
;
  }

  static const char* value(const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.output);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GetAllConfiguredWifisResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::kortex_driver::GetAllConfiguredWifisResponse_<ContainerAllocator>& v)
  {
    s << indent << "output: ";
    s << std::endl;
    Printer< ::kortex_driver::WifiConfigurationList_<ContainerAllocator> >::stream(s, indent + "  ", v.output);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETALLCONFIGUREDWIFISRESPONSE_H