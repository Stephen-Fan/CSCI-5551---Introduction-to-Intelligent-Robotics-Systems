#!/usr/bin/env python3

import sys
import rospy
import moveit_commander
import pickle

class LoadMoveItTrajectories(object):
    def __init__(self):
        # Initialize the node
        super(LoadMoveItTrajectories, self).__init__()
        moveit_commander.roscpp_initialize(sys.argv)
        rospy.init_node('load_move_it_trajectories')

        try:
            self.degrees_of_freedom = rospy.get_param(rospy.get_namespace() + "degrees_of_freedom", 7)

            # Create the MoveIt! interface objects
            arm_group_name = "arm"
            self.robot = moveit_commander.RobotCommander("robot_description")
            self.arm_group = moveit_commander.MoveGroupCommander(arm_group_name, ns=rospy.get_namespace())

            rospy.loginfo("Initializing node in namespace " + rospy.get_namespace())
        except Exception as e:
            rospy.logerr(f"Initialization failed: {e}")
            self.is_init_success = False
        else:
            self.is_init_success = True
        
        
    def reset_to_home(self):
        """Reset the robot to the home position."""
        rospy.loginfo("Resetting to home position...")
        self.arm_group.set_named_target("home")
        success = self.arm_group.go(wait=True)
        if success:
            rospy.loginfo("Robot successfully reset to home position.")
        else:
            rospy.logerr("Failed to reset to home position.")
        return success


    def load_and_execute_trajectory(self, filename):
        rospy.loginfo(f"Loading trajectory from {filename}")
        try:
            with open(filename, 'rb') as f:
                trajectory_message = pickle.load(f)
            
            # Set the robot's start state to its current state
            #self.arm_group.set_start_state_to_current_state()
            success = self.arm_group.execute(trajectory_message, wait=True)
            if success:
                rospy.loginfo(f"Trajectory {filename} executed successfully.")
            else:
                rospy.logerr(f"Failed to execute trajectory {filename}.")
            return success
        except Exception as e:
            rospy.logerr(f"Error loading trajectory: {e}")
            return False

def main():
    example = LoadMoveItTrajectories()

    if example.is_init_success:
        # Define the trajectory file names
        trajectory_files = [ 
            "trajectory_joint1.pkl",
            "trajectory_joint2.pkl",
            "trajectory_joint3.pkl",
            "trajectory_joint4.pkl",
            "trajectory_vertical.pkl"
        ]

        # Load and execute each trajectory
        for filename in trajectory_files:
            #rospy.loginfo(f"Loading and executing trajectory from {filename}")

            example.reset_to_home()
            success = example.load_and_execute_trajectory(filename)
            if not success:
                rospy.logerr(f"Execution failed for trajectory: {filename}")
                break

    if not example.is_init_success:
        rospy.logerr("Initialization failed.")

if __name__ == '__main__':
    main()

