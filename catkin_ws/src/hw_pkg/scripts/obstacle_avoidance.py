#!/usr/bin/env python3

import rospy
from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Twist

# Global variables
cmd_pub = None  # Publisher for /cmd_vel
twist = Twist()
threshold = 0.5
avoid = False  # Avoidance mode flag

def teleop_callback(msg):
    global avoid, twist, cmd_pub

    if avoid:
        # Stop and turn if in avoidance mode
        twist.linear.x = 0.0
        twist.angular.z = -0.5
        cmd_pub.publish(twist)
    else:
        # Forward teleop command if no obstacle detected
        twist = msg
        cmd_pub.publish(twist)

def scan_callback(scan):
    global avoid, threshold

    # Analyze front LIDAR ranges
    min_dis = min(scan.ranges[:10] + scan.ranges[-10:])

    # Check if the distance is below the threshold. If so, avoid mode.
    if min_dis < threshold:
        avoid = True
    else:
        avoid = False

def main():
    global cmd_pub

    rospy.init_node('obstacle_avoidance', anonymous=True)
    rospy.Subscriber('/scan', LaserScan, scan_callback)
    rospy.Subscriber('/cmd_vel', Twist, teleop_callback)
    cmd_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)

    rospy.spin()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass

