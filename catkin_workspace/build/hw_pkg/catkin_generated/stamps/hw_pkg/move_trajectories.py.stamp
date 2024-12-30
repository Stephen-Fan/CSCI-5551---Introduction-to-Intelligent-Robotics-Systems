#!/usr/bin/env python3

import sys
import rospy
import moveit_commander
import moveit_msgs.msg
from math import pi
import pickle

class ExampleMoveItTrajectories(object):
    """ExampleMoveItTrajectories"""
    def __init__(self):
        # Initialize the node
        super(ExampleMoveItTrajectories, self).__init__()
        moveit_commander.roscpp_initialize(sys.argv)
        rospy.init_node('example_move_it_trajectories')

        try:
            self.is_gripper_present = rospy.get_param(rospy.get_namespace() + "is_gripper_present", False)
            self.degrees_of_freedom = rospy.get_param(rospy.get_namespace() + "degrees_of_freedom", 7)

            # Create the MoveIt! interface objects
            arm_group_name = "arm"
            self.robot = moveit_commander.RobotCommander("robot_description")
            self.scene = moveit_commander.PlanningSceneInterface(ns=rospy.get_namespace())
            self.arm_group = moveit_commander.MoveGroupCommander(arm_group_name, ns=rospy.get_namespace())
            self.display_trajectory_publisher = rospy.Publisher(
                rospy.get_namespace() + 'move_group/display_planned_path',
                moveit_msgs.msg.DisplayTrajectory,
                queue_size=20)

            rospy.loginfo("Initializing node in namespace " + rospy.get_namespace())
        except Exception as e:
            rospy.logerr(f"Initialization failed: {e}")
            self.is_init_success = False
        else:
            self.is_init_success = True

    def reach_named_position(self, target):
        """Go to a named target position."""
        rospy.loginfo(f"Going to named target: {target}")
        self.arm_group.set_named_target(target)
        (success_flag, trajectory_message, _, _) = self.arm_group.plan()
        if success_flag:
            return self.arm_group.execute(trajectory_message, wait=True)
        return False

    def reach_joint_angles(self, joint_positions, tolerance=0.01):
        """Reach specific joint angles."""
        rospy.loginfo("Going to joint angles...")
        self.arm_group.set_goal_joint_tolerance(tolerance)
        self.arm_group.set_joint_value_target(joint_positions)
        return self.arm_group.go(wait=True)

    def reach_cartesian_pose(self, pose, tolerance=0.01):
        """Reach a Cartesian pose."""
        rospy.loginfo("Going to Cartesian pose...")
        self.arm_group.set_goal_position_tolerance(tolerance)
        self.arm_group.set_pose_target(pose)
        return self.arm_group.go(wait=True)

    def save_trajectory(self, filename):
        """Save the planned trajectory to a file."""
        rospy.loginfo(f"Saving trajectory to {filename}")
        (success_flag, trajectory_message, _, _) = self.arm_group.plan()
        if success_flag:
            with open(filename, 'wb') as f:
                pickle.dump(trajectory_message, f)
            rospy.loginfo(f"Trajectory saved successfully to {filename}.")
            return True
        else:
            rospy.logerr("Failed to plan the trajectory.")
            return False

    def load_and_execute_trajectory(self, filename):
        """Load a trajectory from a file and execute it."""
        rospy.loginfo(f"Loading trajectory from {filename}")
        try:
            with open(filename, 'rb') as f:
                trajectory_message = pickle.load(f)
            success = self.arm_group.execute(trajectory_message, wait=True)
            if success:
                rospy.loginfo("Trajectory executed successfully.")
            else:
                rospy.logerr("Failed to execute trajectory.")
            return success
        except Exception as e:
            rospy.logerr(f"Error loading trajectory: {e}")
            return False

def main():
    example = ExampleMoveItTrajectories()

    if example.is_init_success:
        # Define trajectories with target descriptions and file names
        trajectories = [
            #{"target": "vertical", "filename": "trajectory_vertical.pkl"},
            #{"target": "joint_config_1", "filename": "trajectory_joint1.pkl"},
            #{"target": "joint_config_2", "filename": "trajectory_joint2.pkl"},
            #{"target": "vertical", "filename": "trajectory_vertical_1.pkl"},
            {"target": "joint_config_1", "filename": "trajectory_joint1.pkl"},
            {"target": "joint_config_2", "filename": "trajectory_joint2.pkl"},
            {"target": "joint_config_3", "filename": "trajectory_joint3.pkl"},
            {"target": "joint_config_4", "filename": "trajectory_joint4.pkl"},
            #{"target": "home", "filename": "trajectory_home.pkl"}
        ]

        # Save trajectories
        for traj in trajectories:
            rospy.loginfo(f"Planning and saving trajectory for {traj['target']}")
            if traj["target"] == "vertical":
                example.reach_named_position("vertical")
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "home":
                example.reach_named_position("home")
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_1":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = + 0.1
                joint_positions[1] = + 0.1
                #example.reach_joint_angles(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_2":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = + 0.5
                joint_positions[1] = + 0.5
                #example.reach_joint_angles(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_3":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = - 0.3
                joint_positions[1] = - 0.3
                #example.reach_joint_angles(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "joint_config_4":
                joint_positions = example.arm_group.get_current_joint_values()
                joint_positions[0] = - 0.3
                joint_positions[1] = - 0.3
                #example.reach_joint_angles(joint_positions)
                example.save_trajectory(traj["filename"])
            elif traj["target"] == "cartesian_pose":
                pose = example.arm_group.get_current_pose().pose
                pose.position.z -= 0.1
                example.reach_cartesian_pose(pose)
                example.save_trajectory(traj["filename"])

        # Load and execute trajectories
        for traj in trajectories:
            rospy.loginfo(f"Loading and executing trajectory from {traj['filename']}")
            example.load_and_execute_trajectory(traj["filename"])

    if not example.is_init_success:
        rospy.logerr("Initialization failed.")

if __name__ == '__main__':
    main()

