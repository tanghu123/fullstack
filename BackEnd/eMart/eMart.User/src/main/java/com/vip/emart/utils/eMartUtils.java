package com.vip.emart.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class eMartUtils {

	private static String SHA = "SHA-1";

	//encrypt password to store in DB
	public static String encodePassword(String textPwd) {
		try {
			MessageDigest digest = MessageDigest.getInstance(SHA);
			digest.update(textPwd.getBytes());
			byte[] messageDigest = digest.digest();
			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++) {
				String shaHex = Integer.toHexString(messageDigest[i] & 0xFF);
				if (shaHex.length() < 2) {
					hexString.append(0);
				}
				hexString.append(shaHex);
			}
			return hexString.toString();
		} catch (NoSuchAlgorithmException e) {
			return "";
		}
	}

	//Verify password
	public static boolean verifyPassword(String textPwd, String encryptedPwd) {
		if (encryptedPwd.equals(encodePassword(textPwd))) {
			return true;
		} else {
			return false;
		}
	}
}
