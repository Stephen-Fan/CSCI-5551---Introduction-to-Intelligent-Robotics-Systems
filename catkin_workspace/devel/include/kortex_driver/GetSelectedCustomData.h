// Generated by gencpp from file kortex_driver/GetSelectedCustomData.msg
// DO NOT EDIT!


#ifndef KORTEX_DRIVER_MESSAGE_GETSELECTEDCUSTOMDATA_H
#define KORTEX_DRIVER_MESSAGE_GETSELECTEDCUSTOMDATA_H

#include <ros/service_traits.h>


#include <kortex_driver/GetSelectedCustomDataRequest.h>
#include <kortex_driver/GetSelectedCustomDataResponse.h>


namespace kortex_driver
{

struct GetSelectedCustomData
{

typedef GetSelectedCustomDataRequest Request;
typedef GetSelectedCustomDataResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct GetSelectedCustomData
} // namespace kortex_driver


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::kortex_driver::GetSelectedCustomData > {
  static const char* value()
  {
    return "d4420814b14d58afc7b7b98f4fdd7907";
  }

  static const char* value(const ::kortex_driver::GetSelectedCustomData&) { return value(); }
};

template<>
struct DataType< ::kortex_driver::GetSelectedCustomData > {
  static const char* value()
  {
    return "kortex_driver/GetSelectedCustomData";
  }

  static const char* value(const ::kortex_driver::GetSelectedCustomData&) { return value(); }
};


// service_traits::MD5Sum< ::kortex_driver::GetSelectedCustomDataRequest> should match
// service_traits::MD5Sum< ::kortex_driver::GetSelectedCustomData >
template<>
struct MD5Sum< ::kortex_driver::GetSelectedCustomDataRequest>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::GetSelectedCustomData >::value();
  }
  static const char* value(const ::kortex_driver::GetSelectedCustomDataRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::GetSelectedCustomDataRequest> should match
// service_traits::DataType< ::kortex_driver::GetSelectedCustomData >
template<>
struct DataType< ::kortex_driver::GetSelectedCustomDataRequest>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::GetSelectedCustomData >::value();
  }
  static const char* value(const ::kortex_driver::GetSelectedCustomDataRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::kortex_driver::GetSelectedCustomDataResponse> should match
// service_traits::MD5Sum< ::kortex_driver::GetSelectedCustomData >
template<>
struct MD5Sum< ::kortex_driver::GetSelectedCustomDataResponse>
{
  static const char* value()
  {
    return MD5Sum< ::kortex_driver::GetSelectedCustomData >::value();
  }
  static const char* value(const ::kortex_driver::GetSelectedCustomDataResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::kortex_driver::GetSelectedCustomDataResponse> should match
// service_traits::DataType< ::kortex_driver::GetSelectedCustomData >
template<>
struct DataType< ::kortex_driver::GetSelectedCustomDataResponse>
{
  static const char* value()
  {
    return DataType< ::kortex_driver::GetSelectedCustomData >::value();
  }
  static const char* value(const ::kortex_driver::GetSelectedCustomDataResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // KORTEX_DRIVER_MESSAGE_GETSELECTEDCUSTOMDATA_H