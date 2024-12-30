#!/usr/bin/env python3

import sys
import rospy
import moveit_commander
from math import pi
import pickle

class SaveMoveItTrajectories(object):
    def __init__(self):
        # Initialize the node
        super(SaveMoveItTrajectories, self).__init__()
        moveit_commander.roscpp_initialize(sys.argv)
        rospy.init_node('save_move_it_trajectories')

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

    def save_trajectory(self, filename):
        rospy.loginfo(f"Saving trajectory to {filename}")
        
        self.arm_group.set_start_state_to_current_state()
        (success_flag, trajectory_message, _, _) = self.arm_group.plan()
        if success_flag:
            with open(filename, 'wb') as f:
                pickle.dump(trajectory_message, f)
            rospy.loginfo(f"Trajectory saved successfully to {filename}.")
            return True
        else:
            rospy.logerr("Failed to plan the trajectory.")
            return False

def main():
    example = SaveMoveItTrajectories()

    if example.is_init_success:
        # Define trajectories with target descriptions and file names
        trajectories = [
            {"target": "joint_config_1", "filename": "trajectory_joint1.pkl"},
            {"target": "joint_config_2", "filename": "trajectory_joint2.pkl"},
            {"target": "joint_config_3", "filename": "trajectory_joint3.pkl"},
            {"target": "joint_config_4", "filename": "trajectory_joint4.pkl"},
            {"target": "vertical", "filename": "trajectory_vertical.pkl"}
        ]

        # Save trajectories
        for traj in trajectories:
            rospy.loginfo(f"Planning and saving trajectory for {traj['target']}")
            if traj["target"] == "vertical":
                example.arm_group.set_named_target("vertical")
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "home":
                example.arm_group.set_named_target("home")
                example.save_trajectory(traj["filename"])
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_1":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = 0
                joint_positions[1] = -0.35
                joint_positions[2] = 3.14
                joint_positions[3] = -2.54
                joint_positions[4] = 0
                joint_positions[5] = -0.87
                joint_positions[6] = 1.57
                example.arm_group.set_joint_value_target(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_2":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = 0.9
                joint_positions[1] = 0.6
                example.arm_group.set_joint_value_target(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_3":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[2] = 0.2
                joint_positions[3] = 0.8
                example.arm_group.set_joint_value_target(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_4":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[2] = 1.2
                joint_positions[3] = 0.3
                example.arm_group.set_joint_value_target(joint_positions)
                example.save_trajectory(traj["filename"])


    if not example.is_init_success:
        rospy.logerr("Initialization failed.")

if __name__ == '__main__':
    main()

